import { classNames } from "./helpers/classNames/classNames"
import './styles/index.scss'
import { useTheme } from "./theme/useTheme"



export const App = () => {
  const {theme, toggleTheme} = useTheme()


  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  )
}
