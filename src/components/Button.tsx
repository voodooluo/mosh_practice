import React from 'react';

interface Props {
    title: string;
    onClick: () => void;
    color?: string;
}

const Button = ({title, onClick, color = 'primary'}: Props) => {
    return (
        <div>
            <button type="button" className={"btn btn-" + color} onClick={onClick}>{title}</button>
        </div>
    );
};

export default Button;

