import React from 'react';
import {AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
    color?:string;

}

const Like = ({onClick,color="red"}: Props) => {
    const [heartStatus, setHeartStatus] = useState(false)

    const handleClick = () => {
        setHeartStatus(!heartStatus);
        onClick();
        // console.log("clicked");
    }

    return (
        <div>
            {heartStatus? <AiFillHeart color={color} size={50} onClick={handleClick}/>: <AiOutlineHeart  size={50} onClick={handleClick}/>}
        </div>
    );
};

export default Like;