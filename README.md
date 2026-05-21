# Supply Chain Guard

A local review step for npm packages and VS Code extensions — inspect the artifact before it touches your project.

Website: [supply-chain-guard-five.vercel.app](https://supply-chain-guard-five.vercel.app)

## Quick Start

**1. Install**

```sh
curl -fsSL https://raw.githubusercontent.com/pc-style/supply-chain-guard/main/supply-chain-guard/install.sh | bash
```

**2. Activate the guard in your shell**

```sh
eval "$(scguard shell-hook)"
```

**3. Scan a package before installing**

```sh
scguard review axios
```

---

See [`supply-chain-guard/README.md`](supply-chain-guard/README.md) for full documentation.
