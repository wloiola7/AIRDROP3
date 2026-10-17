# BRAINROT ($BRAINROT)

Reward, distribution, holder-data, and legacy worker services are permanently disabled. Public reward and wallet-data routes return HTTP 410.

## Commands

```bash
npm run typecheck
npm run worker:test
npm run worker:build
npm run build
```

Deployment templates live in `deploy/vercel.env.example` and `deploy/railway.env.example`. Worker environment flags cannot re-enable the disabled worker.
