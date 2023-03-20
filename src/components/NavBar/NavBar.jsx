import React from "react";
import style from "./NavBar.module.scss";

const NavBar = () => {
   return (

         <div className={`${style.container}`}>
            <ul className={`${style.menu}`}>
               <li className={`${style.link}`}>
                  <a href="#">Home</a>
               </li>
               <li className={`${style.link}`}>
                  <a href="#">Messeges</a>
               </li>
               <li className={`${style.link}`}>
                  <a href="#">Music</a>
               </li>
               <li className={`${style.link}`}>
                  <a href="#">User`s</a>
               </li>
            </ul>
         </div>

   )
}

export default NavBar;