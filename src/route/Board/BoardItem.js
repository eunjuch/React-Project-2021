import React from "react";

import "./BoardItem.css";

const BoardItem = (props) => {
    return(
        <>
            <div className="divBoardItem">
                <p class="pBoardItemTitle">{props.title}</p>
                <p class="pBoardItemAuthor">{props.author}</p>
                <p class="pBoardItemDate">{props.date}</p>
            </div>
            <div className="divBoardItemDivider"></div>
        </>
    );
}

export default BoardItem;