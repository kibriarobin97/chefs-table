import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Items from './components/Items/Items'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [carts, setCarts] = useState([])

  const handleCooked = (item) => {
    const isExist = carts.find(cart => cart.id === item.id)
    if (!isExist) {
      const newCarts = [...carts, item]
      setCarts(newCarts)
    }
    else{
      toast.warn("This item is already exist !");
    }
  }


  const handlePreparing = (id) => {
    const cookedCarts = carts.filter(cart=> cart.id!==id)
    setCarts(cookedCarts)
  }


  return (
    <>
      <div className='max-w-7xl mx-auto my-4'>
        <Header></Header>
        <div className='grid md:grid-cols-9 my-8 gap-5'>
          <Items
            handleCooked={handleCooked}
          ></Items>
          <Cart
            carts={carts}
            handlePreparing={handlePreparing}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
