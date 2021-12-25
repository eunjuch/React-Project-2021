import React, {useEffect, useState} from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    const [postList, setPostList] = useState();

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                console.log(response.data.DATA);
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
            {
                // postList.DATA.map(item => {
                //     if(item.pinned){
                //         return(
                //             <div>
                //                 {item.title}
                //             </div>
                //         );
                //     }
                // })
            }
        </div>
    )
}

export default Board;