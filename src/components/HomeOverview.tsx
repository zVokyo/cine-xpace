import Banner from "./Banner"
import PageTitle from "./PageTitle"
import SystemStatus from "./SystemStatus"
import AppInfo from "./AppInfo"
import ProjectChecklist from "./ProjectChecklist"
import NotificationBell from "./NotificationBell"
import ToastContainer from "./ToastContainer"

type HomeOverviewProps = {
  toast: string
  setToast: (message: string) => void
  onNotifications: () => void
}

function HomeOverview({
  toast,
  setToast,
  onNotifications,
}: HomeOverviewProps) {
  return (
    <>
      <Banner />

      <PageTitle
        title="🎬 Cine Xpace"
        subtitle="Sua plataforma de filmes e séries"
      />

      <SystemStatus />
      <AppInfo />
      <ProjectChecklist />

      <NotificationBell
        notifications={3}
        onClick={onNotifications}
      />

      <ToastContainer
        message={toast}
        onClose={() => setToast("")}
      />
    </>
  )
}

export default HomeOverview
