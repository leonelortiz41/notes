import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import logo from './assets/logo-notes.svg'

function App() {
  return (
    <div className='bg-neutral-900 text-white h-screen flex flex-col '>
      <img src={logo} className='h-1/5' ></img>
      <div className=' w-3/4 mx-auto p-2 justify-center h-4/5 '>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/taskForm' element={<TaskForm />} />
          <Route path='/editTask/:id' element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  )
}

export default App
