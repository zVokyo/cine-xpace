import AppContent from "./components/AppContent"

import { useApp } from "./hooks/useApp"

function App() {
  const app = useApp()

  return (
    <AppContent app={app} />
  )
}

export default App
