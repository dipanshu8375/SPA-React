import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import {Routes,Route,NavLink, useRoutes} from 'react-router-dom';
import ProductDetail from './Components/ProductDetail';
import NotFound from './Components/NotFound';


function App() {
  // let routeElements=useRoutes([
  //   {
  //     path:'/',
  //     children:[
  //       {
  //         index:true,
  //         element:<Home/>
  //       },
  //       {
  //         path:'/about',
  //         element:<About/>
  //       },
  //       {
  //         path:'/products',
  //         element:<Products/>,
  //         children:[
  //           {
  //             path:':id',
  //             element:<ProductDetail/>
  //           }
  //         ]

  //       },
  //       {
  //         path:'*',
  //         element:<NotFound/>
  //       }
  //     ]
  //   }
  // ])
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Home</NavLink></li>
        <li><NavLink to="/about" style={({isActive})=>{
          return isActive?{color:'brown',fontWeight:'bold',textDecoration:'none'} : {textDecoration:'none',color:'black',fontWeight:'bold'}
        }}>
          {
            ({isActive})=>{
                return isActive?"Active About":"Inactive About"
            }
          }
          </NavLink></li>
        <li><NavLink to="/products" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>Products</NavLink></li>
      </ul>
      <hr />
      <Routes>
      <Route path="/">  
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Route>
      </Routes>
      {/* {routeElements} */}
    </div>
  );
}

export default App;
