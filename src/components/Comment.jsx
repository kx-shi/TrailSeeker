import '../styles/Comment.css'

export const Comment = ( {comment} ) => {
    return(
        <div className="comment">
            <h2>{comment.author}</h2>
            <p>{comment.content}</p>
            <p>{comment.timestamp}</p>
        </div>
    )
}