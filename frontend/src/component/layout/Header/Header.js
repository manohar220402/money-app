import {React, useState} from 'react'
import '../Header/Header.css'
import { Link } from 'react-router-dom'

function Header(history) {
  
    const [keyword, setKeyword] = useState("");
  
    const searchSubmitHandler = (e) => {
      e.preventDefault();
      if (keyword.trim()) {
        history.push(`/products/${keyword}`);
      } else {
        history.push("/products");
      }
    };
  return (
       <div className="header">
  <Link to="/" className="logo">E Store</Link>
  <div className="header-right">
    <Link to='/'>Home</Link>
    <Link to='/products'>Products</Link>
    <Link to='/login'>Login</Link>
    <Link to='/about'>About</Link>
    <div className='topnav'>
      <form>
    <input onSubmit={searchSubmitHandler} type="text" placeholder="Search.." onChange={(e) => setKeyword(e.target.value)}></input>
    </form>
    </div>
  </div>
</div>

  )
}

export default Header