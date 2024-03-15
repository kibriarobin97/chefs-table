import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Items from './components/Items/Items'

function App() {

  const [carts, setCarts] = useState([])

  const handleCooked = (item) => {
    const newCarts = [...carts, item]
    setCarts(newCarts)
  }
  
  return (
    <>
      <div className='max-w-6xl mx-auto my-4'>
        <Header></Header>
        <div className='grid md:grid-cols-6 my-8 gap-10'>
          <Items
          handleCooked={handleCooked}
          ></Items>
          <Cart
          carts={carts}
          ></Cart>
        </div>
      </div>
    </>
  )
}

export default App
