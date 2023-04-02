import style from '../UserProfile.module.scss';

import Post from './Post/Post';
import PostCreator from './PostCreator/PostCreator' 


const PostsTab = (props) => {
   
   let newPost = props.postsData.map( el => <Post name={el.name} message={el.message} time={el.time} />);

   return (
      <>
         <PostCreator />
         {newPost}
      </>
   )
};


export default PostsTab;