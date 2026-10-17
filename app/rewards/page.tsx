import type { Metadata } from "next";
import { ReceiptsView } from "../../components/scout/views";

export const metadata: Metadata = {
  title: "Disabled",
  description: "Reward and distribution services are disabled."
};

export default function RewardsPage() {
  return <ReceiptsView />;
}
