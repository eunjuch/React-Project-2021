import React from "react";

import "./PostView.js"

const PostView = (props) => {
    let postID = props.match.params.postID;

    return(
        <div>
            PostView {postID}
        </div>
    )
}

export default PostView;