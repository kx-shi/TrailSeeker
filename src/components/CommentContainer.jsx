import { useSelector } from "react-redux";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import '../styles/Comment.css'

export const CommentContainer = ( {trailID} ) => {
    const comments = useSelector((state) => state.comments.commentList);
    const filteredComments = comments.filter((comment) => comment.trailID === trailID); 
    return(
        <div className="comment-container">
            <h2>Leave a Comment</h2>
            <CommentForm trailID={trailID} />
            {filteredComments.reverse().map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
        </div>
    )
}