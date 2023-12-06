/**
 * Component for container that maps over comments related to specific trail with trailID
 */
import React from "react";
import { useSelector } from "react-redux";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const CommentContainer = () => {
    const comments = useSelector((state) => state.comments.commentList);

    return(
        <div className="comment-container">
            {comments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
            <CommentForm />
        </div>
    )
}