import React from 'react';

import './App.css';
import {SuperButton} from './SuperBatton/SuperButton';
import SuperToDolist from './SuperToDolist';

function App() {
    const tasks = [
        {id: 1, title: 'Html', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'Rezct', isDone: false}

    ]

    return (
        <div className="App">
            <SuperButton name={'Fierst'} callBack={() => {
            }} color={'red'}>Fierst</SuperButton>
            <SuperButton name={'Second'} callBack={() => {
            }}>Second</SuperButton>
            <SuperButton name={'Third'} callBack={() => {
            }} disabled>Third</SuperButton>
            <SuperButton name={'Third'} callBack={() => {
            }} color={'secondary'}>Third</SuperButton>
            <div>------------------------------------------------------</div>


            <SuperToDolist tasks={tasks}>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
                <div>sdgggggggggggggggggggggggggggddddddddddddd</div>
            </SuperToDolist>
            <SuperToDolist tasks={tasks}>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
                <div>sdfgggggggggggggggggggggggggggggggggggggggggg</div>
            </SuperToDolist>
            <SuperToDolist tasks={tasks}></SuperToDolist>
            <SuperToDolist tasks={tasks}></SuperToDolist>

        </div>
    );
}

export default App;
