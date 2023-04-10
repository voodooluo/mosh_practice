import React from "react";
import {Fragment, MouseEvent, useState} from "react";


interface Props {
    items: string[];
    heading: string;
    onSelectedItem: (item: string) => void;


}

function ListComponent(props: Props) {


    const [selectedIndex, setSelectedIndex] = useState(-1);
    // const handleClick=()=>
    // {
    //     setSelectedIndex(index)
    // }
    // // const [name]
    //


    return (
        <Fragment>
            <h1>{props.heading}</h1>
            {props.items.length === 0 && <p>no items found </p>}
            <ul className={'list-group'}>
                {
                    props.items.map((item, index) => (
                        <li key={index}
                            className={index === selectedIndex ? 'list-group-item active' : 'list-group-item'}
                            onClick={() => {
                                setSelectedIndex(index);
                                props.onSelectedItem(item);
                            }}>{item}</li>
                                ))
                            }
                    </ul>
                    </Fragment>);


                }

                export default ListComponent;

