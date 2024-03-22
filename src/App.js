import { BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./component/HomeComponent/Navbar";
import { useDispatch } from "react-redux";
import supabase from "./supabase/supabase";
import { useEffect } from "react";
import { setUsers } from "./slices/slices";
import Product from './pages/Product'
import AddtoCart from "./component/addtoCart/AddtoCart";

function App() {
  const dispatch = useDispatch()

  const getUsers = async()=>{
    const {data,error} = await supabase.auth.getSession()
    if(data.session){
      dispatch(setUsers(data.session.user))
    }
    else{
      console.log(error)
    }

  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className=" bg-gray-50">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
        <Route path="/cart" element={<AddtoCart/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
