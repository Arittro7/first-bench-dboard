import './App.css'
import Accuracy from './Components/Accuracy/Accuracy'
import Graph from './Components/Graph/Graph'
import Improvement from './Components/Improvements/Improvement'
import Navbar from './Components/Navbar/Navbar'
import Result from './Components/ResultSection/Result'

function App() {

  return (
    <div className='min-h-screen bg-gray-200'>
      <Navbar></Navbar>
      <div className='container mx-auto flex px-4 py-6 h-screen gap-4'>
        <div className='w-2/12 '>
          <Result></Result>
        </div>
        <div className='w-10/12 flex flex-col space-y-3'> 
          <Accuracy></Accuracy>
          <Improvement></Improvement>
          <Graph></Graph>
        </div>
      </div>
    </div>
  )
}

export default App
