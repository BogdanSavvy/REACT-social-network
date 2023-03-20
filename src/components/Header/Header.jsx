import React from "react";
import style from './Header.module.scss';
import Logo from "./Logo/Logo";
import Notification from "./Notification/Notification";
import MiniProfile from "./MiniProfile/MiniProfile";
import Search from "./Search/Search";


const Header = () => {
   return(
      <header className={style.header}>
         <div className={style.header__container}>
            <Logo />
            <Search />
            <Notification />
            <MiniProfile />
         </div>
      </header>
   )
}

export default Header;

