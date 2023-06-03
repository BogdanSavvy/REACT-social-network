import style from '../../UserProfile.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';

const Post = props => {
	return (
		<div className={`${style.page__postsBox} ${style.postsBox}`}>
			<div className={`${style.postsBox__post} ${style.post}`}>
				<div className={`${style.post__top}`}>
					<div className={`${style.post__avatar}`}>
						<img
							src={props.ava}
							alt="ava"
						/>
					</div>
					<div className={`${style.post__name}`}>
						<span>{props.name},</span> posted {props.time}.
					</div>
				</div>
				<div className={`${style.post__body}`}>{props.message}</div>
				<div className={`${style.post__action}`}>
					<button>
						<FontAwesomeIcon
							className={`${style.post__like}`}
							icon={faHeart}
						/>
					</button>
					<button>
						<FontAwesomeIcon
							className={`${style.post__comment}`}
							icon={faCommentDots}
						/>
					</button>
					<button>
						<FontAwesomeIcon
							className={`${style.post__repost}`}
							icon={faShareFromSquare}
						/>
					</button>
					<button>
						<FontAwesomeIcon
							className={`${style.post__share}`}
							icon={faSquareShareNodes}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Post;
