import type { Theme } from "../types"

type SettingsPanelProps = {
  theme: Theme
}

function SettingsPanel({
  theme,
}: SettingsPanelProps) {
  const isDark = theme === "dark"

  return (
    <section
      style={{
        marginTop: "20px",
        padding: "16px",
        border: isDark
          ? "1px solid #27272a"
          : "1px solid #d4d4d8",
        borderRadius: "14px",
        background: isDark
          ? "#18181b"
          : "#ffffff",
        color: isDark
          ? "#ffffff"
          : "#18181b",
      }}
    >
      <h3
        style={{
          margin: "0 0 8px",
        }}
      >
        ⚙️ Configurações
      </h3>

      <p
        style={{
          margin: 0,
          color: isDark
            ? "#a1a1aa"
            : "#52525b",
        }}
      >
        Tema atual:{" "}
        <strong>
          {isDark ? "Escuro" : "Claro"}
        </strong>
      </p>
    </section>
  )
}

export default SettingsPanel