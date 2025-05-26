import './App.css'
import { HabitCard } from './components/HabitCard'
import { Header } from './components/Header'
import { NewHabitForm } from './components/NewHabitForm'

function App() {

  return (
    <main className='flex flex-col items-center min-h-screen'>
      <Header></Header>
      <NewHabitForm></NewHabitForm>
      <HabitCard></HabitCard>
    </main>
  )
}

export default App