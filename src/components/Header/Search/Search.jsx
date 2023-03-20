import React from 'react';
import style from "./../Header.module.scss";


const Search = () => {
   return(
      <div className={`${style.header__search} ${style.search}`}>
         <div className={style.search__icon}></div>
         <input className={style.search__input} type="text" placeholder="Start typing to search..." />
      </div>
   )
}

export default Search;