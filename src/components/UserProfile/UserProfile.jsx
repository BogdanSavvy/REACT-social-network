import style from './UserProfile.module.scss';

import { Route, Routes } from 'react-router-dom';

import MainProfile from './MainProfie/MainProfile';
import PostsTab from './PostsTab/PostsTab';
import Activity from './Activity/Activity';
import GalleryTab from './GalleryTab/GalleryTab';
import VideoTab from './VideoTab/VideoTab';

const UserProfile = props => {
	return (
		<div className={`${style.body}`}>
			<div className={`${style.body__page} ${style.page}`}>
				<MainProfile
					profile={props.profile}
					status={props.status}
					updateProfileStatus={props.updateProfileStatus}
				/>
				<Routes>
					<Route
						path="/posts"
						element={
							<PostsTab
								postsData={props.postData}
								addPost={props.addPost}
							/>
						}
					/>
					<Route
						path="/activity"
						element={<Activity />}
					/>
					<Route
						path="/gallery"
						element={<GalleryTab />}
					/>
					<Route
						path="/videos"
						element={<VideoTab />}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default UserProfile;
