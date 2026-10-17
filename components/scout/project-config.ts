function publicValue(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export const projectConfig = {
  brainrotMint:
    publicValue(process.env.NEXT_PUBLIC_BRAINROT_MINT) ??
    publicValue(process.env.NEXT_PUBLIC_SOURCE_TOKEN_MINT),
  projectXUrl: null,
  communityUrl: publicValue(process.env.NEXT_PUBLIC_BRAINROT_COMMUNITY_URL),
  pumpMoneyMint:
    publicValue(process.env.NEXT_PUBLIC_BRAINROT_MINT) ??
    publicValue(process.env.NEXT_PUBLIC_SOURCE_TOKEN_MINT),
  explorerBaseUrl: publicValue(process.env.NEXT_PUBLIC_EXPLORER_BASE_URL) ?? "https://solscan.io"
} as const;

export const legacyProjectConfig = {
  pumpMoneyMint: projectConfig.brainrotMint
} as const;

export function explorerTxUrl(signature: string) {
  return `${projectConfig.explorerBaseUrl.replace(/\/$/, "")}/tx/${signature}`;
}
