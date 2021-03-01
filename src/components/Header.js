import React from 'react';

const Header = (props) =>{
    console.warn("home",props.data);
    return(
        <div>
            <h1>Header Basket</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img.icons8.com/doodle/2x/shopping-basket-2.png" title="Your Basket" class="cart-image"/>
                    <span class="cart-value ng-binding">{props.data.length}</span> 
                </div>
            </div>
        </div>
    )
}

export default Header;