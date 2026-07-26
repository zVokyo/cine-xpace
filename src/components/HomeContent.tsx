import DashboardSummary from "./DashboardSummary"
import EditProfile from "./EditProfile"
import HomeOverview from "./HomeOverview"
import NavigationMenu from "./NavigationMenu"

import type {
  Channel,
  Page,
  Profile,
  Theme,
} from "../types"

type HomeContentProps = {
  profile: Profile
  theme: Theme
  toast: string
  history: string[]
  favoriteChannels: Channel[]
  setPage: (page: Page) => void
  setToast: (message: string) => void
  onSaveProfile: (profile: Profile) => void
  onNotifications: () => void
}

function HomeContent({
  profile,
  theme,
  toast,
  history,
  favoriteChannels,
  setPage,
  setToast,
  onSaveProfile,
  onNotifications,
}: HomeContentProps) {
  return (
    <section className="stack fade-in">
      <HomeOverview
        toast={toast}
        setToast={setToast}
        onNotifications={onNotifications}
      />

      <EditProfile
        profile={profile}
        onSave={onSaveProfile}
      />

      <NavigationMenu
        setPage={setPage}
      />

      <DashboardSummary
        username={profile.name}
        theme={theme}
        favoritesCount={
          favoriteChannels.length
        }
        historyCount={history.length}
      />
    </section>
  )
}

export default HomeContent
