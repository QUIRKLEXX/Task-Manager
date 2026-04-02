import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Newtasks from './Pages/Newtasks'
import Alltasks from './Pages/Alltasks'
import Navbar from './layout/Navbar'
import Errors from './Pages/Errors'




function App() {
 
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/all-tasks' element={<Alltasks/>}/>
 <Route path='/new-task' element={<Newtasks/>}/>
 <Route path='*' element={<Errors/>}/>
</Routes>
</BrowserRouter>
    </>
  )
}

export default App

