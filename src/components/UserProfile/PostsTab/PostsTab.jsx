import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator';

const PostsTab = props => {
	let newPost = props.postsData.map(el => (
		<Post
			key={el.id}
			ava={el.ava}
			name={el.name}
			message={el.message}
			time={el.time}
		/>
	));

	return (
		<>
			<PostCreator addPost={props.addPost} />
			{newPost}
		</>
	);
};

export default PostsTab;
