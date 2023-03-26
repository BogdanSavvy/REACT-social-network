import style from "./../Header.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
   return(
      <div className={`${style.header__search} ${style.search}`}>
         <FontAwesomeIcon className={`${style.search__icon}`} icon={faMagnifyingGlass} />
         <input className={style.search__input} type="text" placeholder="Start typing to search..." />
      </div>
   )
}

export default Search;