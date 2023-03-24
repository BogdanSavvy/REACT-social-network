import Post from "./Post/Post";
import PostCreator from "./PostCreator/PostCreator";


const PostsTab = () => {
   return (
      <>
         <PostCreator />
         <Post messege="WTF" time="25 min ago" />
         <Post messege="is" time="1 hour ago" />
         <Post messege="going on" time="1h 10min ago" />
         <Post messege="THIS DESIGN IS TRASH!" time="Tommorow" />
      </>
   )
}


export default PostsTab;