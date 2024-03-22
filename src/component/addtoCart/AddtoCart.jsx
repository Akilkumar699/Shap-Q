import { useDispatch, useSelector } from 'react-redux'
import { removeCart } from '../../slices/cardSlice'
export default function AddtoCard() {

    // const [activity , setActivity] = useState(1)

    const cart = useSelector((state)=>state.cartData.cart);
    const user =useSelector((state)=>state.userData.user);
    console.log(cart)

    const dispatch = useDispatch()

    const RemoveCart =(id)=>{
      dispatch(removeCart(id))
    }
  return (
    <div>
      <div className=' bg-white m-4'>
        <h1 className=' p-2 text-center font-bold tracking-wider text-xl hover:border-b-4 border-[#e70071] '>ShapQ</h1>
      </div>
        {
              user?(<div className=' bg-white mt-8 mx-4'>
                {cart.map((item,index)=>
                   <div className=' lg:flex justify-center items-center gap-40 lg:items-center py-8 px-10' key={index}>
                      <div className=' flex items-center justify-center lg:justify-center lg:w-1/2'>
                        <img src={item.url} alt="" />
                      </div>
                      <div className=' flex justify-center mt-8 lg:mt-0 items-center lg:justify-self-center lg:w-1/2'>
                        <div>
                        <h3 className=' text-sm lg:text-lg font-bold tracking-wider'>{item.Product}</h3>
                        <p className='text-sm lg:text-lg mt-2'>{item.Display}</p>
                        <h3 className=' mt-2 font-bold lg:text-lg '>₹{item.Sellingprice}</h3>
                        <button className=' mt-2 bg-[#FB641B] text-xs lg:text-lg text-white font-medium py-2 px-4' onClick={()=>RemoveCart(item.id)}>REMOVE CARD</button>
                        </div>
                        
                      </div>
                  </div>
      
                )}</div>
              ):( <div className="bg-white flex flex-col items-center m-4 py-8">
              <div>
                <img
                  src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                  alt=""
                />
                <p className="text-center">Missing Cart items?</p>
                <p className="text-center mt-2">
                  Login to see the items you added previously
                </p>
                <button className=" bg-[#e70072] text-white font-medium py-2 w-4/5 rounded-md mx-auto block mt-2">Login</button>
              </div>
            </div>)
        }
      </div>
  )
}
