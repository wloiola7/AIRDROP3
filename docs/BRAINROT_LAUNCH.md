# BRAINROT service status

Reward claims, token swaps, airdrops, public reward receipts, holder-data APIs,
and the legacy worker are disabled. Public service routes return HTTP 410.

The worker gates are hard-disabled in code; setting environment variables cannot
re-enable them. Do not deploy a separate service or restore public routes without
an explicit product and security review.
