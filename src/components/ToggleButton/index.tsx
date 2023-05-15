import { useState } from "react"
import "./styles.css"

interface ToggleButtonProps {
  label: string
  toggled: boolean
  callback: (value: boolean) => void
}

export const ToggleButton = ({ label, toggled, callback }: ToggleButtonProps) => {
  const [isToggled, toggle] = useState(toggled)

  const handleOnClick = () => {
    toggle(!isToggled)
    callback(!isToggled)
  }

  return (
    <label>
      <input type="checkbox" defaultChecked={isToggled} onClick={handleOnClick}/>
      <span />
      {/* <strong>{label}</strong> */}
    </label>
  )
}