import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {

  const [clicked, setClicked] = useState(false)

  return (
  <>
  <div className="flex justify-between px-10 py-3 block lg:hidden ">
  <div className={clicked ? "hamburg" : ""} onClick={() => setClicked(!clicked)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg></div> 
  <a href="https://www.myntra.com" className="hover:underline">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSZp3SblWZOEOuGDiYkPgiGPmIjO4I47cBw&s" alt="" className="w-12"/></a>
    </div>

    <div className="hidden lg:flex justify-between items-center p-5 hamburg">
      <div className="lg:flex gap-7 text-lg font-bold">
      <a href="https://www.myntra.com" className="hover:underline">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSZp3SblWZOEOuGDiYkPgiGPmIjO4I47cBw&s" alt="" className="w-12"
        /></a>
       
      <ul className="lg:flex gap-7 ">
        <li><a href="https://www.myntra.com/shop/men" className="hover:underline">
            Men</a></li>
        <li><a href="https://www.myntra.com/shop/women" className="hover:underline">Women</a></li>
        <li><a href="https://www.myntra.com/shop/kids" className="hover:underline">Kids</a></li>
        <li><a href="https://www.myntra.com/shop/home-living" className="hover:underline"> Home & Living</a></li>
        <li><a href="https://www.myntra.com/shop/personal-care" className="hover:underline"> Beauty</a></li>
        <li><a href="https://www.myntra.com/shop/studio/home" className="hover:underline">Studio</a></li>
        <li><a href="https://www.myntra.com" className="hover:underline">Win rewards</a></li>
      </ul>
      </div> 
      <div className="lg:flex gap-5 space-y-3">
      <input placeholder="Search for products" className="border border-gray-600 h-10 p-3 hidden lg:block" value=""></input>
      <div className="block lg:hidden hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg></div>
      <div className="hover:underline hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5"/> </svg><span className="hidden lg:block"> Profile</span></div>
      <a href="https://www.myntra.com/wishlist" className="hover:underline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
          <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> </svg><span className="hidden lg:block">Wishlist</span></a>
      <a href="https://www.myntra.com/checkout/cart" className="hover:underline">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none"><path d="M3.06164 15.1933L3.42688 13.1219C3.85856 10.6736 4.0744 9.44952 4.92914 8.72476C5.78389 8 7.01171 8 9.46734 8H14.5327C16.9883 8 18.2161 8 19.0709 8.72476C19.9256 9.44952 20.1414 10.6736 20.5731 13.1219L20.9384 15.1933C21.5357 18.5811 21.8344 20.275 20.9147 21.3875C19.995 22.5 18.2959 22.5 14.8979 22.5H9.1021C5.70406 22.5 4.00504 22.5 3.08533 21.3875C2.16562 20.275 2.4643 18.5811 3.06164 15.1933Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7.5 8L7.66782 5.98618C7.85558 3.73306 9.73907 2 12 2C14.2609 2 16.1444 3.73306 16.3322 5.98618L16.5 8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 11C14.87 12.4131 13.5657 13.5 12 13.5C10.4343 13.5 9.13002 12.4131 9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg><span className="hidden lg:block">Bag</span></a>
      </div>
    </div>
  </>
  );
};

export default Navbar;
