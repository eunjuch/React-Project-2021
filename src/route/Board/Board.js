import React, { useEffect } from "react";

import axios from "axios";

import "./Board.css";

const Board = () => {
    useEffect(() => {
        axios.post("https://api.cecom.dev/getPost"
        ).then(
            resultOK = (response) => {
                console.log(response);
            }
        ).catch(
            resultError = (error) => {
                console.log(error);
            }
        );

        return () => {
            
        }
    }, []);

    return(
        <div id="divBoard">
            Board Page
        </div>
    )
}

export default Board;