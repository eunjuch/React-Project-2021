import React from "react";

import "./BoardItem.css";

const BoardItem = (props) => {
    return(
        <div>
            {props.title}
            {props.author}
            {props.date}
        </div>
    );
}

export default BoardItem;