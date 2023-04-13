import style from '../UserProfile.module.scss';

import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator' 


const PostsTab = (props) => {
   
   let newPost = props.postsData.map( el => <Post ava={el.ava} name={el.name} message={el.message} time={el.time} />);

   return (
      <>
         <PostCreator newPostTxt={props.newPostTxt} updatePostTxt={props.updatePostTxt} addPost={props.addPost} />
         {newPost}
      </>
   )
};


export default PostsTab;