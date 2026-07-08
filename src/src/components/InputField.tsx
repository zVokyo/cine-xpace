type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}

function InputField({
  value,
  onChange,
  placeholder = "",
  type = "text",
}: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%",
        padding: "14px 16px",
        borderRadius: "12px",
        border: "1px solid #2A2A40",
        background: "#09090f",
        color: "#fff",
        fontSize: "15px",
        outline: "none",
        boxSizing: "border-box",
        transition: "all .2s ease",
      }}
    />
  )
}

export default InputField
