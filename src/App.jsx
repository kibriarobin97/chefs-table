import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Items from './components/Items/Items'

function App() {

  return (
    <>
      <div className='max-w-6xl mx-auto my-4'>
        <Header></Header>
        <div className='grid grid-cols-6 my-8 gap-10'>
          <Items></Items>
          <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
