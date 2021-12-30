import React from "react";

import "./PostWrite.js"

const PostWrite = (props) => {
    let postID = props.match.params.postType;

    return(
        <div>
            PostWrite {postID}
        </div>
    )
}

export default PostWrite;