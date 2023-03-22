import style from './News.module.scss';

const News = (props) => {
   return(
      <section className={`${style.page}`}>
         <div className={`${style.page__container}`}>
            THIS IS <span>NEWS</span> PAGE
         </div>
      </section>
   )
}

export default News;