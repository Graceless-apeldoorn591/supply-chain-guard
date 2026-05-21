import { join } from "node:path";
import { REPORT_DIR } from "./core";
import type { AgentReview, Report } from "./core";
import { resolveAgentMode, runAgentReviews, writeAgentPrompt } from "./integrations";

export async function emitReport(report: Report, json: boolean) {
  const base = report.target.replace(/[^a-z0-9_.@-]+/gi, "_");
  const jsonPath = join(REPORT_DIR, `${base}-${Date.now()}.json`);
  await Bun.write(jsonPath, JSON.stringify(report, null, 2));
  await Bun.write(jsonPath.replace(/\.json$/, ".md"), renderMarkdown(report, jsonPath));
  await writeAgentPrompt(report, "codex", jsonPath);
  await writeAgentPrompt(report, "pi", jsonPath);
  if (json) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`${report.target}: ${report.summary.risk} risk, ${report.summary.findingCount} findings`);
    console.log(jsonPath);
  }
  return jsonPath;
}

export function renderMarkdown(report: Report, reportPath: string) {
  const lines = [
    `# Supply Chain Report: ${report.target}`,
    "",
    `- Kind: ${report.kind}`,
    `- Risk: ${report.summary.risk}`,
    `- Install allowed: ${report.summary.installAllowed}`,
    `- Artifact: ${report.artifact.source}`,
    `- SHA-256: ${report.artifact.sha256}`,
    `- Socket: ${report.intelligence.socket?.status ?? "not-applicable"}`,
    `- Active advisory: ${report.intelligence.activeAdvisory?.active ?? false}`,
    `- JSON: ${reportPath}`,
    "",
    "## Findings",
    "",
  ];
  if (report.findings.length === 0) lines.push("No findings.");
  for (const finding of report.findings) {
    lines.push(`### ${finding.severity.toUpperCase()}: ${finding.title}`);
    lines.push("");
    lines.push(`- ID: ${finding.id}`);
    lines.push(`- Evidence: \`${finding.evidence.replaceAll("`", "'")}\``);
    lines.push(`- Recommendation: ${finding.recommendation}`);
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

export async function maybeRunConfiguredAgentReview(report: Report, reportPath: string, args: string[], json: boolean) {
  const agents = await resolveAgentMode(args);
  if (agents.length === 0) return;
  const reviews = await runAgentReviews(report, reportPath, agents);
  report.agentReviews = reviews;
  await emitReport(report, json);
  blockOnFailedReview(report.target, reviews);
}

export function blockOnFailedReview(target: string, reviews: AgentReview[]) {
  const failed = reviews.find((review) => review.status !== "approved");
  if (failed) {
    throw new Error(`Blocked ${target}: ${failed.agent} returned ${failed.status}. See ${failed.outputPath}`);
  }
}
