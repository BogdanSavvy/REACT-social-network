import style from '../UserProfile.module.scss';


const GalleryTab = (props) => {
   return (
      <section className={`${style.page__gallery} ${style.gallery}`}>
         <div className={`${style.gallery__container}`}>
            <div className={`${style.gallery__photos}`}></div>
            <div className={`${style.gallery__addPhoto}`}></div>
         </div>
      </section>
   )
}


export default GalleryTab;