/**
 * Component for page title
 */
import { Link } from 'react-router-dom';
import '../styles/Comment.css'

export const Title = () => {
    return(
        <Link to="/">
            <h1>TrailSeeker</h1>
        </Link>
    )
}