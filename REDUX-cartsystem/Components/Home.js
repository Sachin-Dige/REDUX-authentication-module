import React from 'react'

const Home = (props) => {
  // console.warn("home", props);
return (
<div>
<h1 style={{textAlign:"center"}}>HOME COMPONENT</h1>

    {/* <div className='add-to-cart'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="Image Not Available" />
    </div> */}
    <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="http://www.sagmart.com/uploads/2018/07/25/product_1/tesla-smartphone-91-lite-specifications.jpg" alt="Product Image Not Available" />
         </div>
         <div className='text-wrapper item'>
            <span> Tesla Phone </span>
            
            <span> Price: ₹80,000 ONLY  </span>
         </div>
         <div className='btn-wrapper item'>

         <button
          onClick={() => props.addToCartHandler({price: '₹100000',name:' TESLA Phone-2'})}>
             
            Add To Cart </button>
         </div>
      </div>
    </div>
  )
}

export default Home
