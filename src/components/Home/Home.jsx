import style from './Home.module.scss';


const Home = () => {
   return(
      <div className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            <h1 className={`${style.page__title}`}>HOME</h1>
            <div className={`${style.page__category}`}></div>
         </div>
      </div>
   )
}

export default Home;
