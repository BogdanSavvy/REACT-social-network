import style from './../Header.module.scss';


const Logo = () => {
   return (
      <div>
         <div className={style.header__logo}><a href="#">Anesta<span>.</span></a></div>
      </div>
   )
}

export default Logo;