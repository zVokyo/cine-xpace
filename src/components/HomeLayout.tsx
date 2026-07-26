import Footer from "./Footer"
import HomeContent from "./HomeContent"
import HomeHeader from "./HomeHeader"
import HomePages from "./HomePages"
import PageContainer from "./PageContainer"
import Sidebar from "./Sidebar"

import type {
  Channel,
  Page,
  Profile,
  Ratings,
  Theme,
} from "../types"

type HomeLayoutProps = {
  username: string
  profile: Profile
  theme: Theme
  sidebarOpen: boolean
  toast: string
  history: string[]
  page: Page
  channels: Channel[]
  filteredChannels: Channel[]
  favoriteChannels: Channel[]
  watchLaterChannels: Channel[]
  ratings: Ratings
  search: string
  category: string

  setTheme: (value: Theme) => void
  setSidebarOpen: (value: boolean) => void
  setPage: (value: Page) => void
  setToast: (value: string) => void
  setSearch: (value: string) => void
  setCategory: (value: string) => void

  onLogout: () => void
  onSaveProfile: (profile: Profile) => void
  onNotifications: () => void
  onEnter: (channelName: string) => void
  onClearHistory: () => void
  onClearFilters: () => void
}

function HomeLayout({
  username,
  profile,
  theme,
  sidebarOpen,
  toast,
  history,
  page,
  channels,
  filteredChannels,
  favoriteChannels,
  watchLaterChannels,
  ratings,
  search,
  category,
  setTheme,
  setSidebarOpen,
  setPage,
  setToast,
  setSearch,
  setCategory,
  onLogout,
  onSaveProfile,
  onNotifications,
  onEnter,
  onClearHistory,
  onClearFilters,
}: HomeLayoutProps) {
  return (
    <PageContainer>
      <HomeHeader
        username={username}
        theme={theme}
        sidebarOpen={sidebarOpen}
        setTheme={setTheme}
        setSidebarOpen={setSidebarOpen}
        onLogout={onLogout}
      />

      {sidebarOpen && <Sidebar />}

      <HomeContent
        profile={profile}
        theme={theme}
        toast={toast}
        history={history}
        favoriteChannels={favoriteChannels}
        setPage={setPage}
        setToast={setToast}
        onSaveProfile={onSaveProfile}
        onNotifications={onNotifications}
      />

      <HomePages
        page={page}
        channels={channels}
        filteredChannels={filteredChannels}
        favoriteChannels={favoriteChannels}
        watchLaterChannels={watchLaterChannels}
        ratings={ratings}
        history={history}
        search={search}
        category={category}
        setSearch={setSearch}
        setCategory={setCategory}
        onEnter={onEnter}
        onClearHistory={onClearHistory}
        onClearFilters={onClearFilters}
      />

      <Footer />
    </PageContainer>
  )
}

export default HomeLayout
