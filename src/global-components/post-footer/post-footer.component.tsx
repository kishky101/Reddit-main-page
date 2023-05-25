import React from "react";
import Button from "../button/button.component";


import './post-footer.styles.scss'

const PostFooter:React.FC = () => {
    return (
        <div className="post-footer">
            <Button buttonType="next">Next</Button>
        </div>
    )
}

export default PostFooter;