import React, {useEffect, useState} from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    let postList = {
        "RESULT": {
            "RESULT_CODE": 100,
            "RESULT_MSG": "NOT LOADED"
        },
        "DATA": {
            "000000-000000": {
                "author": "",
                "content": "",
                "title": ""
            }
        }}

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                postList = response.data;
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
                postList.Result.RESULT_CODE
            }
        </div>
    )
}

export default Board;