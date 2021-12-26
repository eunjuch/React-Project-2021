import React from "react";

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