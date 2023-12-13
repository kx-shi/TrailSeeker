/**
 * Component for various intermediate messages (e.g. Loading, error, ...)
 */
import '../styles/IntermediatePages.css'

export const IntermediatePage = ( {message} ) => {
    return(
        <div className="intermediate-container">
            <h2>{message}</h2>
        </div>
    )
}