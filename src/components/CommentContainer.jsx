/**
 * Component for container that maps over comments related to specific trail with trailID
 */
import React from "react";
import { useSelector } from "react-redux";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import '../styles/Comment.css'

export const CommentContainer = ( {trailID} ) => {
    const comments = useSelector((state) => state.comments.commentList);
    const filteredComments = comments.filter((comment) => comment.trailID === trailID); // filter comments for specific trail

    //console.log(`CommentContainer: ${typeof(trailID)}`)

    return(
        <div className="comment-container">
            <h2>Leave a Comment</h2>
            <CommentForm trailID={trailID} />
            {filteredComments.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
            <CommentForm trailID={trailID} />
        </div>
    )
}