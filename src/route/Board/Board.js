import React, {useEffect, useState} from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    const [postList, setPostList] = useState();

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                setPostList(response.data.DATA);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, [postList]);

    return(
        <div id="divBoard">
            {console.log(postList)}
            {
                postList.map(item => {
                    if(item.pinned){
                        return(
                            <div>
                                {item.title}
                            </div>
                        );
                    }
                })
            }
        </div>
    )
}

export default Board;