import './App.css'
import Header from './components/Header/Header'
import Items from './components/Items/Items'

function App() {

  return (
    <>
      <div className='max-w-6xl mx-auto my-4'>
        <Header></Header>
        <div className='w-2/3 mx-auto my-5 md:flex gap-5'>
          <Items></Items>
        </div>
      </div>
    </>
  )
}

export default App
