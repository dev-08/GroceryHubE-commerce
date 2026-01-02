import React, { useEffect, useState } from 'react';

import mainImg from './mainImg.jpg';
import {Link} from 'react-router-dom'
import logo from './logo2.png'
import center from './main.jpeg'



 function Products() {

    const spacing = '1.5';
    // Correct usage of style prop
    const customStyle = {
 
       
      // Add other style properties as needed
    };

return (
    <div>
       <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

      <div class="  object-contain p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/fruits.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
        >
          <h2 class="tracking-widest  text-xs title-font   font-medium text-white-400 mb-1">CATEGORY</h2>
          <h1 class="title-font text-4xl font-extrabold text-white mb-3">Fuits</h1>
          <p class="leading-relaxed text-white mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/Fruits'>
          <a class="text-white inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/veg.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
        >
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font text-4xl font-extrabold mb-3 text-white">Vegetables</h1>
          <p class="leading-relaxed mb-3 font-extrabold text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/Veg'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/bev.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
        >
          <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
          <h1 class="title-font  text-4xl font-extrabold text-white mb-3">Beverages</h1>
          <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/Beverages'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
         </Link>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/dairy.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
    
          <h1 class="title-font  text-4xl font-medium text-white mb-3">Dairy</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/Dairy'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/household.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
   
          <h1 class="title-font  text-4xl font-extrabold text-white mb-3">HouseHold</h1>
          <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/HouseHold'>
          <a class="text-indigo-500 inline-flex items-center">More products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/hotbr.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative"
        >
        
          <h1 class="title-font  text-4xl font-medium text-white mb-3">Hot Beverages</h1>
          <p class="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/hb'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/snack.jpeg')] rounded-lg bg-white bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">
          
          <h1 class="title-font  text-3xl font-medium text-white mb-3">Snacks</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/snacks'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        
        </div>
      </div>
      <div class="p-4 lg:w-1/3">
        <div class="h-full  bg-[url('../public/images/personalcare.jpeg')] rounded-lg bg-black bg-cover p-6 shadow-lg  dark:bg-neutral-70 text-center relative">

          <h1 class="title-font  text-3xl font-medium text-white mb-3">Personal Care</h1>
          <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          <Link to='/Personalcare'>
          <a class="text-indigo-500 inline-flex items-center">More Products
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </Link>
        
        </div>
      </div>
    </div>
  </div>
</section>



    </div>     
        );  
}


export default Products;