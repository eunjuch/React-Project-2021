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
    
    console.log("Before Load");
    console.log(postList);

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                postList = response.data;
                console.log("After Load");
                console.log(postList);
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
                // postList.DATA.map(item => {
                //     return(
                //         <div>
                //             {item.title}
                //         </div>
                //     );
                // })
            }
        </div>
    )
}

export default Board;