import HomeLayout from "./HomeLayout"
import LoginBox from "./LoginBox"
import PlayerScreen from "./PlayerScreen"

import type { useApp } from "../hooks/useApp"

type AppContentProps = {
  app: ReturnType<typeof useApp>
}

function AppContent({
  app,
}: AppContentProps) {
  if (!app.loggedIn) {
    return (
      <LoginBox
        setLoggedIn={app.setLoggedIn}
      />
    )
  }

  if (app.channel) {
    return (
      <PlayerScreen
        channel={app.channel}
        cinemaMode={app.cinemaMode}
        favorites={app.favorites}
        watchLater={app.watchLater}
        ratings={app.ratings}
        comments={app.comments}
        messages={app.messages}
        text={app.text}
        typing={app.typing}
        reactions={app.reactions}
        toast={app.toast}
        setCinemaMode={app.setCinemaMode}
        setText={app.setText}
        setTyping={app.setTyping}
        setToast={app.setToast}
        onBack={app.handleLeaveChannel}
        onToggleFavorite={app.toggleFavorite}
        onToggleWatchLater={
          app.toggleWatchLater
        }
        onRate={app.rateChannel}
        onSendMessage={app.sendMessage}
        onClearMessages={app.clearMessages}
        onAddComment={app.addComment}
        onAddReaction={app.addReaction}
        onClearReactions={
          app.clearReactions
        }
      />
    )
  }

  return (
    <HomeLayout
      username={app.username}
      profile={app.profile}
      theme={app.theme}
      sidebarOpen={app.sidebarOpen}
      toast={app.toast}
      history={app.history}
      page={app.page}
      channels={app.channels}
      filteredChannels={
        app.filteredChannels
      }
      favoriteChannels={
        app.favoriteChannels
      }
      watchLaterChannels={
        app.watchLaterChannels
      }
      ratings={app.ratings}
      search={app.search}
      category={app.category}
      setTheme={app.setTheme}
      setSidebarOpen={
        app.setSidebarOpen
      }
      setPage={app.setPage}
      setToast={app.setToast}
      setSearch={app.setSearch}
      setCategory={app.setCategory}
      onLogout={app.handleLogout}
      onSaveProfile={
        app.handleSaveProfile
      }
      onNotifications={
        app.handleNotifications
      }
      onEnter={app.enterChannel}
      onClearHistory={
        app.handleClearHistory
      }
      onClearFilters={
        app.handleClearFilters
      }
    />
  )
}

export default AppContent
