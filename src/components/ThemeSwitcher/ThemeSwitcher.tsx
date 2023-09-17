import { useCallback, useEffect, useState } from 'react';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false)

  const themeText = isDark ? 'Light' : 'Dark';

  const ThemeIcon = isDark ? SunIcon : MoonIcon

  const togglerSwitcher = useCallback(()=>{
    setDark(!isDark)
  }, [setDark, isDark])

useEffect(()=> {
  document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
}, [isDark])

return (
  <div className={styles.switcher} onClick={togglerSwitcher}>
    <span> {themeText} </span>
    <ThemeIcon  className= {styles.icon}/>
  </div>
)
}
