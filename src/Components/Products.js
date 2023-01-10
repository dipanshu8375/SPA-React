import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products=()=>{
  const [products,setProducts] = useState([
    {
      id:1,
      pname:'Strawberry',
      desc:'Red Strawberry',
      price:'$50',
      shipping:'$3',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNkGIkinmU27fkfx6Q6jW4mHWcEGuWs5L0y2YAsgaNbupCHE&s"
    },
    {
      id:2,
      pname:'Mango',
      desc:'Sweetest Organic Mango',
      price:'$40',
      shipping:'$10',
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp2VLVyrtk8SPfue4i_52VSW4DsJwRRZ2fPD3Fcu-b-MUE-wH_&s"
    },
    {
      id:3,
      pname:'Grapes',
      desc:'Jumbo Grapes',
      price:'$30',
      shipping:'$5',
      img:"https://www.freepnglogos.com/uploads/grapes-png/grapes-grape-red-transparent-png-stickpng-5.png"
    },
    {
      id:4,
      pname:'Oranges',
      desc:'Packed With Vitamin C',
      price:'$32',
      shipping:'$0',
      img:"https://www.freepnglogos.com/uploads/orange-png/fruit-orange-png-image-pixabay-22.png" 
    }
  ]);
    return(
        <div>
             
          <ul>
          {
            products.map((prod)=>{
              return(
                <li className="card">
                  <Link state={prod} to={`/products/${prod.id}`} style={{textDecoration:'none'}} > 
                    <img src={prod.img}/> 
                    <div className="text">
                      <h3>{prod.pname}</h3> 
                    </div>
                  </Link>
                </li>
              )
            })
          }
      </ul>
      <Outlet context={products}/>
        </div>
    )
}
export default Products;

