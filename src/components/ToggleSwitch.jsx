import './src/css/stylesToggleSwitch.css'
/*
const ThemeContext = createContext() */

export function ToggleSwitch () {
  return (
    <label class='switch' aria-label='ChangeTheme'>
      <input
        type='checkbox' class='input__check chec' id='switch-theme'
      />
      <span class='slider round' />
    </label>

  )
}
