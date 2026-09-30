# Repository operating policy

<!-- BEGIN:global-ci-cost-policy -->
## Mandatory CI / cost policy

- No GitHub Actions workflow may be created until a dedicated local runner exists.
- Never use GitHub-hosted `ubuntu-*`, `windows-*`, `macos-*`, dynamic `runs-on`, or automatic cloud fallback.
- Planned local labels: `self-hosted, Windows, X64, oscar-ci, center-testers`.
- If CI becomes necessary, register the local runner first and update `.github/runner-policy.json`.
- Iterate in Drive/local first; GitHub is for consolidated checkpoints.
<!-- END:global-ci-cost-policy -->
