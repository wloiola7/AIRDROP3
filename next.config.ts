import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  env: {
    NEXT_PUBLIC_BRAINROT_MINT:
      process.env.NEXT_PUBLIC_BRAINROT_MINT ??
      process.env.BRAINROT_MINT ??
      process.env.NEXT_PUBLIC_SOURCE_TOKEN_MINT ??
      process.env.SOURCE_TOKEN_MINT ??
      ""
  }
};

export default nextConfig;
