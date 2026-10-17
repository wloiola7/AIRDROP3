import type { Metadata } from "next";
import { LeaderboardView } from "../../components/scout/leaderboard-view";

export const metadata: Metadata = {
  title: "Disabled",
  description: "Holder data services are disabled."
};

export default function LeaderboardPage() {
  return <LeaderboardView />;
}
