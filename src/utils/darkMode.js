const prefersColorScheme = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches

const isDarkModeMachine = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersColorScheme)

const toggleSwitch = document.getElementById("switch-theme")

if (isDarkModeMachine) {
  document.documentElement.classList.add('dark')
  toggleSwitch.checked = true
} else {
  document.documentElement.classList.remove('dark')
  toggleSwitch.checked = false
}

toggleSwitch.addEventListener('click', (e) => {
  const toggle = document.documentElement.classList.toggle('dark')
  if (toggle) {
    toggleSwitch.checked = true
    localStorage.theme = 'dark'
  } else if (!toggle) {
    toggleSwitch.checked = false
    localStorage.theme = 'light'
  } else {
    localStorage.removeItem('theme')
  }
})
