import './App.css'
import HOC from './components/HOC'
import Hooksintro from './ReactHooks/Hooksintro'
import Transition from './ReactHooks/Transition'
import Reactrouter from './Reactrouters/Reactrouter'
import Saas from './styling/Saas'
const App = () => {

  return (
  
    <div>
      <Hooksintro/>
      <Transition/>
      <Reactrouter/>
      <HOC/>
      <Saas/>
    </div>
  )
}

export default App
