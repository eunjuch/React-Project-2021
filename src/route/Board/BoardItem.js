import React from "react";

import "./BoardItem.css";

const BoardItem = (props) => {
    let postAuthor = props.author;
    let postDate = props.date;
    let postTitle = props.title;

    let today = new Date();   

    let year = today.getFullYear() - 2000;
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let dateToday = "" + year + month + date;

    if(dateToday == postDate.split("-")[0]){
        postDate = postDate.split("-")[1];
    }else{
        postDate = postDate.split("-")[0];
    }

    return(
        <>
            <div className="divBoardItem">
                <p class="pBoardItemTitle">{postTitle}</p>
                <p class="pBoardItemAuthor">{postAuthor}</p>
                <p class="pBoardItemDate">{postDate}</p>
            </div>
            <div className="divBoardItemDivider"></div>
        </>
    );
}

export default BoardItem;