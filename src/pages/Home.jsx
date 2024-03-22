import Carousal from "../component/Carousal/Carousal"
import { catagory } from "../data/data"
import { acessories } from "../data/acessories"
import ProductCarousal from "../component/ProductCarousal/ProductCarousal"
import { BestOf } from "../data/data"
import {acessorie} from "../data/acessories"
import { mediumData } from "../data/acessories"

export default function Home() {
  return (
    <div className=" bg-gray-100 p-4">
    <div className="hidden md:hidden lg:flex justify-between bg-white shadow-md p-4">
      {
        acessories.map((item,index)=>{
          return <div key={index}> 
                    <img className=" w-24"  src={item.image} alt="" />
                    <p className=" text-sm font-medium">{item.catagory}</p>
                </div> 
        })
      }
    </div>
    <div className="flex md:hidden justify-evenly bg-white shadow-md p-4">
      {
        acessorie.map((item,index)=>{
          return <div key={index}> 
                    <img src={item.image} alt="" />
                    <p className=" text-sm">{item.catagory}</p>
                </div> 
        })
      }
    </div>
    <div className="hidden md:flex lg:hidden justify-evenly bg-white shadow-md p-4">
      {
        mediumData.map((item,index)=>{
          return <div key={index}> 
                    <img src={item.image} alt="" />
                    <p className=" text-sm ">{item.catagory}</p>
                </div> 
        })
      }
    </div>
    <div className=" mt-8 overflow-hidden outline-none z-10">
      <Carousal catagory={catagory} className=' z-10'/>
    </div>
    <div className=" overflow-hidden">
          <ProductCarousal
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
          <ProductCarousal
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Beauty,Food,Toys"}
            Data={BestOf.Electronics}
          />
          <ProductCarousal
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Winter Essentials"}
            Data={BestOf.Electronics}
          />
          <ProductCarousal
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Wedding & Gifting Specials"}
            Data={BestOf.Electronics}
          />
        </div>
    </div>
  )
}
