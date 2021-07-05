import React, { useEffect, useState } from "react";

type data = {
    str: string,
    obj: { 
        value: Number[],
        entries: String [] 
    },
    arr: number[],
    arrayOfObj:  {
        light: {
            foreground: string,
            background: string
        },
        dark: {
            foreground: string,
            background: string
        }
    }[]
}
function Hello(props: data) {
    const [counter, setCounter] = useState<number>(1);
    useEffect(() => {

    }, [])
    const updateCounter = () => {
        setCounter(counter+1);
    }

    return (
        <ul className="hello">
            <li>Name: {props.str}</li>
            <li>Object values: {props.obj.value}</li>
            <li>Object entries: {props.obj.entries}</li>
            <li>Array: {props.arr}</li>
            <li>Array of Object: {  props.arrayOfObj[0].dark.foreground}</li>
            <li>
                <button onClick={updateCounter}>Add</button>
                 Counter: {counter}
            </li>
        </ul>
    )
}

export default Hello;