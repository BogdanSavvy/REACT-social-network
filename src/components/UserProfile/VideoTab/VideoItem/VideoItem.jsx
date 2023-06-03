import style from '../../UserProfile.module.scss';
import testVideo from '../../../../videos/test.mp4';

const VideoItem = props => {
	return (
		<div className={`${style.video__videoBox}`}>
			<div className={`${style.video__item}`}>
				<video
					controls
					width="450"
				>
					<source
						src={testVideo}
						type="video/mp4"
					/>
				</video>
				<h3 className={`${style.video__subtitle}`}>Adequacy x1000</h3>
				<p className={`${style.video__description}`}>by Papich</p>
			</div>
		</div>
	);
};

export default VideoItem;
