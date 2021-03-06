import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import auth from '../firebase';

function Header() {
    const [{basket},dispatch]=useStateValue();
    const history=useHistory();
     
    async function signout (e){
        e.preventDefault();
        localStorage.removeItem("isSignin");
        history.push("/login")
        return await auth.signout();
    }

    return (
        <div className="header" >
            <Link to ="/">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
         

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to="/login">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>

                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                       Bye
                    </span>
                    <span className="header__optionLineTwo signout" onClick={signout}>
                        Signout
                    </span>

                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <Link to="/orders">
                    <span className="header__optionLineTwo">
                        Orders
                    </span>
                    </Link>
                   

                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>

                </div>
                <Link to="/checkout">
                       
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">{basket.length}</span>

                </div>

                </Link>
             
            </div>

        </div>
    )
}

export default Header
