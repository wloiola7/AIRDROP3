# BRAINROT environment setup

Reward, distribution, holder-data, and legacy worker services are disabled.
Public reward and wallet-data routes return HTTP 410.

The worker cannot be enabled through environment variables. Do not configure an
external reward or leaderboard API to bypass the disabled public endpoints.
Keep all secrets server-side; never expose RPC URLs, service-role keys, or
signing authority through `NEXT_PUBLIC_` variables.
