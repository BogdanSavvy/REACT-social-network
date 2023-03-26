import style from './../Header.module.scss';


const Logo = (props) => {
   return (
      <div>
         <div className={style.header__logo}><a href="#">Friendverse<span>.</span></a></div>
      </div>
   )
}

export default Logo;