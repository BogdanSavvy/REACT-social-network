import style from '../../UserProfile.module.scss';


const PhotoCard = (props) => {
   return (
      <div className={`${style.gallery__photosBox}`}>
         <div className={`${style.gallery__item}`}>
            <img src="https://bestcube.space/wp-content/uploads/mem-s-bagz-banni.jpg" alt="Photo_card" />
            <h3 className={`${style.gallery__subtitle}`}>ITEM</h3>
            <p className={`${style.gallery__description}`}>DESCRIPTION</p>
         </div>
      </div>
   )
}

export default PhotoCard;