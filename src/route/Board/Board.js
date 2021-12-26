import React, {useEffect, useState} from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    const [postList, setPostList] = useState({
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
        }
    });

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                setPostList(response.data);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, []);

    return(
        <div id="divBoard">
            <div id="divBoardContainer">
                
            </div>
            {/* {
                Object.entries(postList.DATA).map(postData => {
                    return(
                        <div>
                            {postData[1].title}
                        </div>
                    )
                })
            } */}
        </div>
    )
}

export default Board;