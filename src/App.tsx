import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from "./components/ListComponent";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
    const items = [
        'new york',
        'beijing',
        'Melbourne',
        'Sydney'
    ];

    // const heading="test123";
    const handleSelectedItem = (item: string) => {
        console.log(item);

    }

    const [showAlert,setShowAlert]=useState(false);


    const click = () => {
        console.log(showAlert);
        setShowAlert(!showAlert);

    };
    return (
        <div>
            <Button title='test button' onClick={click}  />
            {showAlert? <Alert onClick={click}>test Alert</Alert> : null}

            {/*<ListComponent items={items} heading='test 123342342'*/}
            {/*               onSelectedItem={handleSelectedItem}*/}
            {/*></ListComponent>*/}
        </div>
    );
}

export default App;
