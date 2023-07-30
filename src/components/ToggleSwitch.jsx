import { useState } from 'react'
import './ToggleSwitch.css'

export function ToggleSwitch () {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <div className=''>
      <label
        className='switch ' id='dark_mode'
        aria-label='ChangeTheme'
      >
        <input type='checkbox' className='input__check' checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className='slider round' />
      </label>
    </div>
  )
}
