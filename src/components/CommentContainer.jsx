/**
 * Component for container that will map over comments
 */
import React from "react"
import { useSelector } from "react-redux"
import { Comment } from "./Comment";

export const CommentContainer = () => {
    const comments = useSelector((state) => state.comments.commentList);

    return(
        <div className="comment-container">
          {comments.map((comment, index) => (
            <Comment key={index} comment={comment} />
          ))}
        </div>
    )
}