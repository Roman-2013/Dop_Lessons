import React, {Component} from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    name: string
    callBack: () => void
    color?: string
    disabled?: boolean
    children:React.ReactNode
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {name, callBack, color, disabled,children, ...setProps} = props

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (classname ? ' ' + className : '')


    // const finalClassName=`${s.button} ${s.red}`
    // const finalClassName=`${s.button} ${color==='red'?s.red:s.default}`

    // const finalClassName=`${s.button}
    //  ${color==='red'?s.red:s.default}
    //   ${disabled?s.disabled:''}`

    const finalClassName = `${s.button}
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
     ${disabled ? s.disabled : ''}`


    return (
        <button className={finalClassName} onClick={() => callBack()}>{children}</button>
    );
}


//----------------------------------------------------------------------


// import React, {Component} from 'react';
//
// type PropsType = {
//     name: string
//     callBack: () => void
// }
//
// export const SuperButton: React.FC<PropsType> = ({
//                                                      name,
//                                                      callBack,
//                                                      ...respProps
//                                                  }) => {
//
//     return (
//         <button onClick={()=>callBack()}>{name}</button>
//     );
// }

