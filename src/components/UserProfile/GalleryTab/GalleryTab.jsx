import style from '../UserProfile.module.scss';

import PhotoCard from './PhotoCard/PhotoCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

const GalleryTab = props => {
	return (
		<section className={`${style.page__gallery} ${style.gallery}`}>
			<div className={`${style.gallery__container}`}>
				<a
					href="#"
					className={`${style.gallery__addPhoto}`}
				>
					<FontAwesomeIcon
						className={`${style.gallery__icon}`}
						icon={faSquarePlus}
					/>
					<p>Add Photo</p>
				</a>
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
				<PhotoCard />
			</div>
		</section>
	);
};

export default GalleryTab;
