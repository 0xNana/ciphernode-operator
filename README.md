# Ciphernode Field Guide

A community-maintained, Diátaxis-structured learning resource for Interfold ciphernode operators.

## Information architecture

Navigation is intentionally progressive: orient → understand → tutorial → activate → reference.

- Documentation: landing page for the complete guide
- Start here: shortest route from understanding to operation
- Explanation: why ciphernodes exist
- Tutorial: run your first ciphernode on Sepolia
- How-to: register, bond FOLD, add tickets, and verify active status
- Reference: requirements, lifecycle, contracts, CLI, and glossary

```text
/
├── documentation
├── start-here
├── explanation/why-ciphernodes
├── tutorials/run-your-first-ciphernode
├── how-to/
│   ├── register-an-operator
│   ├── bond-fold
│   ├── add-tickets
│   └── verify-active-status
└── reference/
    ├── operator-requirements
    ├── lifecycle
    ├── contracts
    ├── cli
    └── glossary
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

Canonical URL: https://run-ciphernode.0xelegant.dev

Designed for Vercel deployment as a standard Next.js App Router project. Set `NEXT_PUBLIC_SITE_URL` to override the canonical URL in preview environments.

## Content assets

The `content/` directory contains:

- source map / technical verification checklist
- flagship X Article draft
- operator X Article draft
- tutorial video script
- 48-hour submission checklist

## Editorial policy

This is not official Interfold documentation. Volatile protocol values should be checked against official docs, the live dashboard, and deployment manifest immediately before publication.
