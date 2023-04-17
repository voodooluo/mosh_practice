import React, {useState} from 'react';

interface Props {
    children: string;
    length: number;


}

let flag=true

const Game = ({children, length}: Props) => {
    console.log('r1')
    const [expand, setExpand] = useState(true)
    // const [text, setText] = useState(children)
    // const fullText = children;
    const text=expand?children:children.substring(0,length)+'....';
    console.log('r2')
    const handleClick = () => {
        // console.log(fullText, expand)
        setExpand(!expand);
        // flag=!flag;

        // if (flag) {
        //     setText(fullText);
        //     console.log('more has been executed')
        // } else {
        //     console.log('less hsa been executed')
        //     setText(fullText.substring(0, length) + '...');
        // }

    }
    return (
        <>
            <div>
                <p>{text}</p>
                <button onClick={handleClick}>{expand ? 'Less' : 'More'}</button>
            </div>
        </>
    );
};

export default Game;