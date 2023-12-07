/**
 * Component for handling commenting logic
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { comments } from "../reducers/comments";
import '../styles/Comment.css';

export const CommentForm = () => {
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const updateTextInput = (e) => {
        switch(e.target.id) {
            case "name":
                setName(e.target.value)
                break;
            case "content":
                setContent(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleCommentSubmit = (e) => {
      e.preventDefault();
      console.log("ayy")
      dispatch(comments.actions.createComment( { id: 4, author: name, content: content } ));
    }

    return(
        <form className="comment-form" onSubmit={handleCommentSubmit}>
            <label htmlFor="name"><p>Name:</p></label>
            <input type="text" id="name" onChange={updateTextInput} placeholder="your name" required />   
            <label htmlFor="content"><p>Leave a comment:</p></label>
            <input type="text" className="comment-input" id="content" onChange={updateTextInput} required />   
            <button type="submit" className="comment-submit">Comment!</button>
        </form>
    )
}