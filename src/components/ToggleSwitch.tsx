import '../css/stylesToggleSwitch.css'
/*
const ThemeContext = createContext() */

export const ToggleSwitch = () => {
  return (
    <label className='switch' aria-label='ChangeTheme'>
      <input
        type='checkbox' className='input__check chec' id='switch-theme'
      />
                      
      
      




      
      

      
      <span className='slider round' />
    </label>


    
    
  )
}

