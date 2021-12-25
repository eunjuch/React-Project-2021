import React, {useEffect, useState} from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    let postList = {"postID": ""}

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                postList = response.data.DATA;
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, [postList]);

    return(
        <div id="divBoard">
            {
                postList.map(item => {
                    return(
                        <div>
                            {item.title}
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Board;