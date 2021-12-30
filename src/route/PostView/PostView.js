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
                setPostData(response.data);
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
                postData.DATA.map((item) => {
                    return(
                        <div>
                            {item.title}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostView;