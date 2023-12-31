import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/NavbarClient.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHome, faUser} from '@fortawesome/free-solid-svg-icons';


const NavbarClient = () => {
  const { currentUser, logout} = useContext(AuthContext);
  console.log(currentUser)
  const navigate = useNavigate()
  function handleClick(e) {
    navigate("/client")
  }
  if(currentUser) {
  return (
    <div className="navbarclient">
      <h1 onClick={handleClick}> AutoMart </h1>
      <div className="container">
        <div className="links">
          <span className="link" id = 'home-button' onClick = {()=> navigate("/client")}>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <span className="link" onClick = {()=> navigate("/products")}>
            <>Products</>
          </span>
          <span className="link" id = "cart-button" onClick = {()=> navigate("/products/cart")}>
            <span>Cart</span>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
          <span className="link"  onClick = {()=> navigate("/products/order")}>
            <>Orders</>
          </span>
          <span className= "link" onClick = {()=> navigate("/client-details")}>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <div className='session_details'>
          <span onClick = {()=> navigate("/client-details")}>
            Client {currentUser?.Client_ID}
          </span>
          <span className = "logout" onClick={logout}>Logout</span>
        </div>
      </div>
    </div>
  )
  } else {
    return (  <div className="navbarclient">
                <h1> Welcome </h1>
                <div className="container">
                  <div className="links">
                      <Link className="link" to="/login">
                        Login
                      </Link>
                  </div>
                </div>
              </div>
    )
  }
}



export default NavbarClient