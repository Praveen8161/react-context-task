import './App.css'
import {CartData} from './Context/CartContext'
import CartProduct from './components/CartProduct';
import Total from './components/Total';

function App() {

  const {data} = CartData();

  return (
    <div className='bg-slate-100'>
      <div className='container flex flex-col items-center justify-center w-11/12 min-h-screen gap-5 py-5 mx-auto bg-gray-300 xl:w-3/5'>
        {data && data?.map((card) =>
        <CartProduct
        key={card.id}
        ids = {card.id}
        title={card.title}
        description={card.description}
        price = {card.price}
        thumbnail = {card.thumbnail}
        />
        )}
        <Total />
      </div>
    </div>
  )
}

export default App
