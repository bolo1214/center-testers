import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(), dir=path.join(root,'.github','workflows');
const files=fs.existsSync(dir)?fs.readdirSync(dir).filter(n=>/\.ya?ml$/i.test(n)):[];
if(files.length){console.error('RUNNER_POLICY_FAILED: GitHub Actions is disabled until a dedicated self-hosted runner is registered.');files.forEach(f=>console.error('- forbidden workflow: .github/workflows/'+f));process.exit(1)}
console.log('RUNNER_POLICY_PASS: no Actions workflows exist; provision a dedicated self-hosted runner before enabling CI.');
