/**
 * Component for handling user comment function
 * Uses'createComment'-action from reducers/comments
 */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { comments } from "../reducers/comments";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Comment.css';

export const CommentForm = ( {trailID} ) => {
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const updateTextInput = (e) => {
        switch(e.target.id) {
            case "name":
                setName(e.target.value);
                break;
            case "content":
                setContent(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleCommentSubmit = (e) => {
      e.preventDefault();
      dispatch(comments.actions.createComment( { id: uuidv4(), trailID: trailID, author: name, content: content } ));
      setName("");
      setContent("");
    }

    return(
        <form className="comment-form" onSubmit={handleCommentSubmit}>
            <label htmlFor="name"><p>Name</p></label>
            <input type="text" className="comment-input" id="name" value={name} onChange={updateTextInput} placeholder="your name" required />   
            <label htmlFor="content"><p>Comment</p></label>
            <textarea className="comment-input" id="content" value={content} onChange={updateTextInput} required cols={30} rows={10}></textarea>
            <button type="submit" className="comment-submit">Post</button>
        </form>
    )
}