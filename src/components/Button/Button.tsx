// import React from 'react';
import styles from "./Button.module.css"

interface Props {
    title: string;
    onClick: () => void;
    color?: string;
}

const Button = ({title, onClick, color = 'primary'}: Props) => {
    return (
        <div>
            {/*<button type="button" className={"btn btn-" + color} onClick={onClick}>{title}</button>*/}
            <button type="button" className={[styles.btn,styles['btn-'+color]].join(' ')} onClick={onClick}>{title}</button>
        </div>
    );
};

export default Button;

