import React from 'react';
import {findAllByDisplayValue} from '@testing-library/react';

type GeneralType = {
    tasks: PropsType[]
    children?: React.ReactNode
}
type PropsType = {
    id: number
    title: string
    isDone: boolean
}

const SuperToDolist: React.FC<GeneralType> = (props) => {
    const {tasks, children} = props
    return (
        <ul>
            {tasks.map(el => {
                return (
                    <li>
                        <span>{el.id}</span>
                        <span>{el.title}</span>
                        <input type={'checkbox'} checked={el.isDone}/>

                    </li>
                )

            })}
            {children}
            <div>--------------------------------</div>
        </ul>

    );
};

export default SuperToDolist;