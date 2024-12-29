import React, { useState } from 'react'

interface ToggleProps {
  name: string;
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DynamicToggle: React.FC<ToggleProps> = ({ name, value, onChange }) => {
  const [isChecked, setIsChecked] = useState(value)

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onChange(e)
  }

  return (
    <input
      type="checkbox"
      className={`toggle toggle-lg ${isChecked ? 'toggle-success' : '!bg-error !border-error'}`}
      name={name}
      checked={isChecked}
      onChange={handleToggleChange}
    />
  )
}

export default DynamicToggle
