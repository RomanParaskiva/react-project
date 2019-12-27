import React from 'react';
import FirstScreen from './FirstScreen/FirstScreen';
import SecondScreen from "./SecondScreen/SecondScreen";
import ThirdScreen from "./ThirdScreen/ThirdScreen";

function MainContent() {
    return (
        <main>
            <FirstScreen/>
            <SecondScreen/>
            <ThirdScreen/>
        </main>
    )
}

export default MainContent;