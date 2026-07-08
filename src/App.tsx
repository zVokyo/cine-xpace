import { useState } from "react"

import Header from "./src/components/Header"
import Sidebar from "./src/components/Sidebar"
import Banner from "./src/components/Banner"
import ThemeToggle from "./src/components/ThemeToggle"
import LogoutButton from "./src/components/LogoutButton"
import LoginBox from "./src/components/LoginBox"
import NotificationBell from "./src/components/NotificationBell"
import ToastContainer from "./src/components/ToastContainer"
import AppButton from "./src/components/AppButton"
import AppCard from "./src/components/AppCard"
import PageTitle from "./src/components/PageTitle"
import SidebarToggle from "./src/components/SidebarToggle"
import ResponsiveWrapper from "./src/components/ResponsiveWrapper"
import Footer from "./src/components/Footer"
import SystemStatus from "./src/components/SystemStatus"
import AppInfo from "./src/components/AppInfo"
import ProjectChecklist from "./src/components/ProjectChecklist"
import LiveNotice from "./src/components/LiveNotice"
import StatsCard from "./src/components/StatsCard"
import ProfilePanel from "./src/components/ProfilePanel"
import Achievements from "./src/components/Achievements"
import SettingsPanel from "./src/components/SettingsPanel"
import EditProfile from "./src/components/EditProfile"
import FavoritesPage from "./src/components/FavoritesPage"

import { channels } from "./data/channels"
import { getUser } from "./utils/storage"

import { useAuth } from "./hooks/useAuth"
import { useComments } from "./hooks/useComments"
import { useFavorites } from "./hooks/useFavorites"
import { useHistory } from "./hooks/useHistory"
import { useProfile } from "./hooks/useProfile"
import { useRatings } from "./hooks/useRatings"
import { useWatchLater } from "./hooks/useWatchLater"

import HomePage from "./pages/HomePage"
import PlayerPage from "./pages/PlayerPage"
import WatchLaterPage from "./pages/WatchLaterPage"
type Message = {
  user: string
  avatar: string
  text: string
}

function App() {
  const { loggedIn, setLoggedIn } = useAuth()
  const { profile, updateProfile } = useProfile()
  const { favorites, toggleFavorite: toggleFavoriteHook } = useFavorites()
  const { watchLater, toggleWatchLater: toggleWatchLaterHook } = useWatchLater()
  const { history, addToHistory, clearHistory: clearHistoryHook } = useHistory()
  const { ratings, rateChannel: rateChannelHook } = useRatings()
  const { comments, addComment: addCommentHook } = useComments()

  const [selectedChannel, setSelectedChannel] = useState<string | null>(null)
  const [page, setPage] = useState("home")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")
  const [theme, setTheme] = useState("dark")
  const [cinemaMode, setCinemaMode] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [toast, setToast] = useState("")
  const [text, setText] = useState("")
  const [typing, setTyping] = useState(false)
  const [reactions, setReactions] = useState<string[]>([])
  const [messages, setMessages] = useState<Message[]>([
    { user: "Sistema", avatar: "🌙", text: "Bem-vindo ao Cine Xpace!" },
  ])

  const username = profile.name || getUser()
  const channel = channels.find((c) => c.name === selectedChannel)
  const filteredChannels = channels.filter((channel) => {
    const matchesSearch = channel.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === "Todos" || channel.category === category

    return matchesSearch && matchesCategory
  })

  const favoriteChannels = channels.filter((channel) =>
    favorites.includes(channel.name)
  )

  const watchLaterChannels = channels.filter((channel) =>
    watchLater.includes(channel.name)
  )

  function enterChannel(channelName: string) {
    setSelectedChannel(channelName)
    addToHistory(channelName)
  }

  function clearHistory() {
    clearHistoryHook()
    setToast("Histórico limpo!")
  }

  function toggleFavorite(channelName: string) {
    toggleFavoriteHook(channelName)
    setToast("Favoritos atualizados!")
  }

  function toggleWatchLater(channelName: string) {
    toggleWatchLaterHook(channelName)
    setToast("Assistir depois atualizado!")
  }

  function rateChannel(value: number) {
    if (!channel) return

    rateChannelHook(channel.name, value)
    setToast("Avaliação salva!")
  }
  function addComment(comment: string) {
    if (!channel) return

    addCommentHook(channel.name, comment)
    setToast("Comentário enviado!")
  }

  function handleSaveProfile(newProfile: { name: string; avatar: string }) {
    updateProfile(newProfile)
    setToast("Perfil salvo!")
  }

  function sendMessage() {
    if (!text.trim()) return

    setMessages([
      ...messages,
      {
        user: profile.name,
        avatar: profile.avatar,
        text,
      },
    ])

    setText("")
    setTyping(false)
  }

  function clearFilters() {
    setSearch("")
    setCategory("Todos")
    setToast("Filtros limpos!")
  }

  function openNotifications() {
    setToast("Você tem notificações!")
  }

  if (!loggedIn) {
    return <LoginBox setLoggedIn={setLoggedIn} />
  }

  if (channel) {
    return (
      <PlayerPage
        channel={channel}
        cinemaMode={cinemaMode}
        favorites={favorites}
        watchLater={watchLater}
        ratings={ratings}
        comments={comments}
        messages={messages}
        text={text}
        typing={typing}
        reactions={reactions}
        toast={toast}
        setText={setText}
        setTyping={setTyping}
        setReactions={setReactions}
        setToast={setToast}
        onBack={() => setSelectedChannel(null)}
        onToggleCinema={() => setCinemaMode(!cinemaMode)}
        onToggleFavorite={() => toggleFavorite(channel.name)}
        onToggleWatchLater={() => toggleWatchLater(channel.name)}
        onRate={rateChannel}
        onSendMessage={sendMessage}
        onAddComment={addComment}
      />
    )
  }

  return (
    <main style={{ minHeight: "100vh", background: "#09090f", color: "white", padding: "24px" }}>
      <ResponsiveWrapper>
        <Header username={username} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <LogoutButton setLoggedIn={setLoggedIn} />

        <SidebarToggle open={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        {sidebarOpen && <Sidebar />}

        <Banner />
        <PageTitle title="🎬 Cine Xpace" subtitle="Sua plataforma de filmes e séries" />
        <SystemStatus />
        <AppInfo />
        <ProjectChecklist />

        <NotificationBell notifications={3} onClick={openNotifications} />
        <ToastContainer message={toast} onClose={() => setToast("")} />
        <EditProfile profile={profile} onSave={handleSaveProfile} />

        <AppButton onClick={() => setPage("home")}>🏠 Início</AppButton>
        <AppButton onClick={() => setPage("favorites")}>⭐ Favoritos</AppButton>
        <AppButton onClick={() => setPage("watchLater")}>📺 Assistir Depois</AppButton>

        <AppCard>
          <LiveNotice favoritesCount={favoriteChannels.length} />
          <StatsCard favoritesCount={favorites.length} historyCount={history.length} />
          <ProfilePanel username={profile.name} />
          <Achievements favoritesCount={favorites.length} historyCount={history.length} />
          <SettingsPanel theme={theme} />
        </AppCard>

        {page === "favorites" ? (
          <FavoritesPage channels={favoriteChannels} ratings={ratings} onEnter={enterChannel} />
        ) : page === "watchLater" ? (
          <WatchLaterPage channels={watchLaterChannels} onEnter={enterChannel} />
        ) : (
          <HomePage
            channels={channels}
            filteredChannels={filteredChannels}
            favoriteChannels={favoriteChannels}
            ratings={ratings}
            history={history}
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            onEnter={enterChannel}
            onClearHistory={clearHistory}
            onClearFilters={clearFilters}
          />
        )}

        <Footer />
      </ResponsiveWrapper>
    </main>
  )
}

export default App
