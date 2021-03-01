import React from 'react';

const Home = (props) =>{
    console.warn("home",props.data);
    return(
        <div>
            <h1>Home Basket</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img.icons8.com/doodle/2x/shopping-basket-2.png" title="Your Basket" class="cart-image"/>
                    <span class="cart-value ng-binding">{props.data.length}</span> 
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="//cdn1.xtramarx.com/stagelocal/images/website_v7/em-logo-black.png"/>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <span className="product-item">Study Package</span>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <span>Price: Rs 1000.00</span>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'iphone 11'})}>Add to Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <button onClick={()=>props.removeFromCartHandler()}>Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;