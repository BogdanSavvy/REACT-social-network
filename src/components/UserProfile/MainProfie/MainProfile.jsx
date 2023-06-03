import style from '../UserProfile.module.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faGithub,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import defaultUserAva from '../../../images/defaultAva/user.jpg';
import defaultBgImg from '../../../images/defaultBg/defBg.webp';
import Preloader from '../../common/Preloader/Preloader';

const MainProfile = props => {
	if (!props.profile) {
		return <Preloader />;
	}
	return (
		<section className={`${style.page__profile} ${style.profile}`}>
			<div className={`${style.profile__image}`}>
				<img
					src={!props.profile.photos.large ? defaultBgImg : props.profile.photos.large}
					alt="wallpaper_img"
				/>
			</div>
			<div className={`${style.profile__info} ${style.info}`}>
				<div className={`${style.info__avatar}`}>
					<img
						src={
							!props.profile.photos.small ? defaultUserAva : props.profile.photos.small
						}
						alt="that was be avatar )"
					/>
				</div>
				<div className={`${style.info__description}`}>
					<h2 className={`${style.info__name}`}> {props.profile.fullName} </h2>
					<ProfileStatus
						status={props.status}
						updateProfileStatus={props.updateProfileStatus}
					/>
				</div>
				<div className={`${style.info__contacts}`}>
					<div className={`${style.info__links}`}>
						<a
							className={`${
								!props.profile.contacts.facebook ? style.info__linkNull : style.info__link
							}`}
							href={props.profile.contacts.facebook}
						>
							<FontAwesomeIcon icon={faFacebook} />
						</a>
						<a
							className={`${
								!props.profile.contacts.instagram
									? style.info__linkNull
									: style.info__link
							}`}
							href={props.profile.contacts.instagram}
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							className={`${
								!props.profile.contacts.twitter ? style.info__linkNull : style.info__link
							}`}
							href={props.profile.contacts.twitter}
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							className={`${
								!props.profile.contacts.github ? style.info__linkNull : style.info__link
							}`}
							href={props.profile.contacts.github}
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							className={`${
								!props.profile.contacts.youtube ? style.info__linkNull : style.info__link
							}`}
							href={props.profile.contacts.youtube}
						>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</div>
				</div>
			</div>
			<div className={`${style.profile__tabs} ${style.tabs}`}>
				<ul className={`${style.tabs__list}`}>
					<li className={`${style.tabs__link}`}>
						<NavLink to="posts/">Posts</NavLink>
					</li>
					<li className={`${style.tabs__link}`}>
						<NavLink to="activity/">Activity</NavLink>
					</li>
					<li className={`${style.tabs__link}`}>
						<NavLink to="gallery/">Gallery</NavLink>
					</li>
					<li className={`${style.tabs__link}`}>
						<NavLink to="videos/">Videos</NavLink>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default MainProfile;
