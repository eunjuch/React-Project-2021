import React, {useEffect, useState} from "react";

import axios from "axios";

import "./PostView.js"

const PostView = (props) => {
    let postID = props.match.params.postID;

    const [postData, setPostData] = useState({
        "RESULT": {
            "RESULT_CODE": 100,
            "RESULT_MSG": "NOT LOADED"
        },
        "DATA": {
            "author": "",
            "content": "",
            "title": "게시글을 불러오는 중입니다..."
        }
    });

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPost",
            {
                "postID": postID
            }
        ).then(
            function resultOK(response) {
                setPostData(response);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, []);

    return(
        <div>
            {
                Object.entries(postData).map((item) => {
                    let postAuthor = "";
                    let postContent = "";
                    let postTitle = "";

                    if(item[0] == "data" && item[1].RESULT.RESULT_CODE == 0){
                        postAuthor = item[1].DATA.author;
                        postContent = item[1].DATA.content;
                        postTitle = item[1].DATA.title;

                        console.log(postAuthor);
                        console.log(postContent);
                        console.log(postTitle);
                    }
                })
            }
        </div>
    )
}

export default PostView;