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


const sun = document.querySelector('#sun')
const moon = document.querySelector('#moon')


const toggleChange = document.querySelector('#dark_mode')

toggleChange.addEventListener('click', (e) => {
  const toggle = document.documentElement.classList.toggle('dark')

  if (toggle) {
    (localStorage.theme = 'dark') && (sun.style.display = 'none') && (moon.style.display = 'block')
    toggleSwitch.checked = true
  } else if (!toggle) {
    ((localStorage.theme = 'light') && (sun.style.display = 'block') && (moon.style.display = 'none'))
    toggleSwitch.checked = false
  } else {
    localStorage.removeItem('theme')
  }
})


toggleSwitch.addEventListener('click', (e) => {
  const toggle = document.documentElement.classList.toggle('dark')
  if (toggle) {
    (localStorage.theme = 'dark') && (sun.style.display = 'none') && (moon.style.display = 'block')
    toggleSwitch.checked = true
  } else if (!toggle) {
    ((localStorage.theme = 'light') && (sun.style.display = 'block') && (moon.style.display = 'none'))
    toggleSwitch.checked = false
  } else {
    localStorage.removeItem('theme')
  }
})

document.documentElement.classList.contains('dark')
  ? (sun.style.display = 'none') && (moon.style.display = 'block')
  : (sun.style.display = 'block') && (moon.style.display = 'none')
