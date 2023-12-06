import { createSlice } from "@reduxjs/toolkit";

let commentList = [
    { id: 1, content: 'This is an AMAZING hike area. It felt Alice in Wonderland like as it looks like you enter a different kind of forest at every twist and turn.', timestamp: '2023-11-21, 21:00:44', author: "Miriam"},
    { id: 2, content: 'I went here in winter but I assume it would be so much nicer during the summer. Beautiful place to walk in the nature around the lakes', timestamp: '2023-11-21, 21:00:44', author: "Hans L"},
    { id: 3, content: 'Awesome and magical place!', timestamp: '2023-11-21, 21:00:44', author: "Mr. Meow"},
]

const initialState = {
    commentList
}

export const comments = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        /**
         * This action is used by the user to create a comment
         * The payload needs to include the following:
         * 
         *      id: ID of the comment, generated using uuidv4
         *      trailID: ID of the specific trail
         *      author: Alias of the commenter
         *      content: Content of the comment
         * 
         * The action updates the state commentList with a new
         * comment that includes the payload
         */
        createComment: (state, action) => {
            const { id, author, content } = action.payload;
            const timestamp = new Date().toLocaleString();

            // TODO: Add logic
            state.commentList.push({
                id,
                content,
                timestamp,
                author
            });
        }
    }
});