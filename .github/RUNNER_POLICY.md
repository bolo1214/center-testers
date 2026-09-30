# CI runner policy

GitHub Actions is intentionally disabled by policy because this repository does not currently have a dedicated self-hosted runner.

Before adding any workflow, provision a PC runner with `self-hosted, Windows, X64, oscar-ci, center-testers`, change the policy to self-hosted-only, and add the runner-policy gate. GitHub-hosted runners and automatic cloud fallback are forbidden. Drive/local work comes first; GitHub is for consolidated checkpoints.
