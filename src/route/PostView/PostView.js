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
                Object.entries(postData).map((item) => {
                    let postJson;
                    let resultCode;

                    if(item[0] == "RESULT"){
                        resultCode = item[1].RESULT_CODE;
                    }else if(item[0] == "DATA"){
                        postJson = item[1];
                    }

                    if(resultCode == 0){
                        console.log(postJson);

                        return(
                            <div>
                                {postJson}
                            </div>
                        );
                    }

                    
                })
            }
        </div>
    )
}

export default PostView;