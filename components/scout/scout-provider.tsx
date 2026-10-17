"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { LoadState, ScoutStats } from "./types";
import { projectConfig } from "./project-config";

type ScoutContextValue = {
  launchState: "prelaunch" | "live";
  stats: ScoutStats;
  state: LoadState;
  error: string | null;
  lastUpdated: Date | null;
  refresh: () => Promise<void>;
};

const emptyStats: ScoutStats = {
  liveDataAvailable: false,
  currentEpoch: 0,
  totalEpochs: 0,
  lastRewardAirdropped: 0,
  totalRewardAirdropped: 0,
  totalCreatorFeesConvertedSol: null,
  latestEligibleHolders: 0,
  latestTransaction: null,
  sourceMint: projectConfig.brainrotMint,
  rewardMint: null,
  eligibilityMin: null,
  maxHolderPct: null,
  emergencyPaused: false,
  averageMultiplier: null,
  nextDropTime: null,
  totalSolValueAirdropped: 0,
  totalHoldersRewarded: 0,
  roundHistory: [],
  recentRewards: [],
  rewardBreakdown: [],
  leaderboard: []
};

const ScoutContext = createContext<ScoutContextValue | null>(null);

export function ScoutProvider({
  children,
  launchState
}: {
  children: React.ReactNode;
  launchState: "prelaunch" | "live";
}) {
  const [stats, setStats] = useState(emptyStats);
  const [state, setState] = useState<LoadState>("loading");
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const refresh = useCallback(async () => {
    setStats(emptyStats);
    setState("empty");
    setError(null);
    setLastUpdated(null);
  }, []);

  const value = useMemo<ScoutContextValue>(
    () => ({ launchState, stats, state, error, lastUpdated, refresh }),
    [error, launchState, lastUpdated, refresh, state, stats]
  );

  return <ScoutContext.Provider value={value}>{children}</ScoutContext.Provider>;
}

export function useScout() {
  const value = useContext(ScoutContext);
  if (!value) throw new Error("useScout must be used inside ScoutProvider");
  return value;
}
