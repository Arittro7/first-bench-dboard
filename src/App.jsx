import './App.css'
import Accuracy from './Components/Accuracy/Accuracy'
import Graph from './Components/Graph/Graph'
import Improvement from './Components/Improvements/Improvement'
import Navbar from './Components/Navbar/Navbar'
import Result from './Components/ResultSection/Result'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-gray-100'>
      <div className=" mx-auto flex flex-col md:flex-row px-4 py-6 h-screen gap-4">
        {/* Left Section */}
        <div className="md:w-3/12 lg:w-2/12 w-full">
          <Result></Result>
        </div>

        {/* Right Section */}
        <div className="md:w-9/12 lg:w-10/12 w-full flex flex-col space-y-3">
          <Accuracy></Accuracy>
          <Improvement></Improvement>
          <Graph></Graph>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
