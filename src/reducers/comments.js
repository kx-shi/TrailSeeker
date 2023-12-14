import { createSlice } from "@reduxjs/toolkit";

let commentList = [
    { id: 1, trailID: "3532647", content: 'This is a comment for trail 3532647', timestamp: '2023-11-21, 21:00:44', author: "3532647"},
    { id: 2, trailID: "34357241", content: 'This is a comment for trail 34357241', timestamp: '2023-11-21, 21:00:44', author: "34357241"},
    { id: 4, trailID: "23500189", content: 'This is a comment for trail 23500189', timestamp: '2023-11-21, 21:00:44', author: "23500189"},
    { id: 5, trailID: "42434505", content: 'This is a comment for trail 42434505', timestamp: '2023-11-21, 21:00:44', author: "42434505"},
    { id: 6, trailID: "13277712", content: 'This is a comment for trail 13277712', timestamp: '2023-11-21, 21:00:44', author: "13277712"},
    { id: 7, trailID: "42433635", content: 'This is a comment for trail 42433635', timestamp: '2023-11-21, 21:00:44', author: "42433635"},
    { id: 8, trailID: "13277672", content: 'This is a comment for trail 13277672', timestamp: '2023-11-21, 21:00:44', author: "13277672"},
    { id: 9, trailID: "1374733", content: 'This is a comment for trail 1374733', timestamp: '2023-11-21, 21:00:44', author: "1374733"},
    { id: 10, trailID: "13277637", content: 'This is a comment for trail 13277637', timestamp: '2023-11-21, 21:00:44', author: "13277637"},
    { id: 11, trailID: "13277606", content: 'This is a comment for trail 13277606', timestamp: '2023-11-21, 21:00:44', author: "13277606"},
    { id: 12, trailID: "13277578", content: 'This is a comment for trail 13277578', timestamp: '2023-11-21, 21:00:44', author: "13277578"},
    { id: 13, trailID: "13276226", content: 'This is a comment for trail 13276226', timestamp: '2023-11-21, 21:00:44', author: "13276226"},
    { id: 14, trailID: "13277527", content: 'This is a comment for trail 13277527', timestamp: '2023-11-21, 21:00:44', author: "13277527"},
    { id: 15, trailID: "42810988", content: 'This is a comment for trail 42810988', timestamp: '2023-11-21, 21:00:44', author: "42810988"},
    { id: 16, trailID: "803725228", content: 'This is a comment for trail 803725228', timestamp: '2023-11-21, 21:00:44', author: "803725228"},
    { id: 17, trailID: "3532647", content: 'This is an AMAZING hike area. It felt Alice in Wonderland like as it looks like you enter a different kind of forest at every twist and turn.', timestamp: '2023-11-21, 21:00:44', author: "Miriam"},
    { id: 18, trailID: "34357241", content: 'I went here in winter but I assume it would be so much nicer during the summer. Beautiful place to walk in the nature around the lakes', timestamp: '2023-11-21, 21:00:44', author: "Hans L"},
    { id: 19, trailID: "23500189", content: 'Awesome and magical place!', timestamp: '2023-11-21, 21:00:44', author: "Mr. Meow"},
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
            const { id, trailID, author, content } = action.payload;
            const timestamp = new Date().toLocaleString();

            state.commentList.push({
                id,
                trailID,
                content,
                timestamp,
                author
            });
        }
    }
});