import AppCard from "./AppCard"
import LiveNotice from "./LiveNotice"
import StatsCard from "./StatsCard"
import ProfilePanel from "./ProfilePanel"
import Achievements from "./Achievements"
import SettingsPanel from "./SettingsPanel"

import type { Theme } from "../types"

type DashboardSummaryProps = {
  username: string
  theme: Theme
  favoritesCount: number
  historyCount: number
}

function DashboardSummary({
  username,
  theme,
  favoritesCount,
  historyCount,
}: DashboardSummaryProps) {
  return (
    <AppCard>
      <LiveNotice
        favoritesCount={
          favoritesCount
        }
      />

      <StatsCard
        favoritesCount={
          favoritesCount
        }
        historyCount={historyCount}
      />

      <ProfilePanel
        username={username}
      />

      <Achievements
        favoritesCount={
          favoritesCount
        }
        historyCount={historyCount}
      />

      <SettingsPanel
        theme={theme}
      />
    </AppCard>
  )
}

export default DashboardSummary
