import './App.css'
import Header from './Components/Header';
import TodoBody from './Components/TodoBody';

function App() {

  return (
    <div id='root'>
      <div id='container'>
        <p className='text-[#646681] text-[40px] font-extrabold '>TODO LIST</p>

        <Header/>
        {/* <TodoBody/> */}

        
      </div>
    </div>
  )
}

export default App;
