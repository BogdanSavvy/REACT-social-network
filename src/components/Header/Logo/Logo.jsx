import { NavLink } from 'react-router-dom';
import style from './../Header.module.scss';


const Logo = (props) => {
   return (
      <div>
         <div className={style.header__logo}><NavLink to='/'>Friendverse<span>.</span></NavLink></div>
      </div>
   )
}

export default Logo;