import style from '../UserProfile.module.scss';

import VideoItem from './VideoItem/VideoItem';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'


const VideoTab = (props) => {
   return (
      <section className={`${style.page__video} ${style.video}`}>
         <div className={`${style.video__container}`}>
            <a href='#' className={`${style.video__addVideo}`}>
               <FontAwesomeIcon className={`${style.video__icon}`} icon={faSquarePlus} />
               <p>Add Video</p>
            </a>
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
            <VideoItem />
         </div>
      </section>
   )
}


export default VideoTab;