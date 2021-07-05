import React, { useEffect, useState } from "react";

type Format = {
    foreground: string,
    background: string
}

type data = {
    str: string,
    obj: { 
        value: Number[],
        entries: String [] 
    },
    arr: number[],
    arrayOfObj:  {
        light: Format,
        dark: Format
    }[]
}

interface Employee {
    id: number
    employee_name: string
    employee_salary: number
    employee_age: number
    profile_image?: string
    test?: string
}

interface MyObj {
    id: string
};

function Hello(props: data) {
    const [counter, setCounter] = useState<number>(1);
    const [response, serResponse] = useState<Employee[]>([]);
    useEffect(() => {
        fetchEmployees()
        runAsyncFunctions();
    }, [])
    
    const fetchEmployees = async (): Promise<Employee[]> => {
        try {
            let res  = await fetch("https://dummy.restapiexample.com/api/v1/employees");
            const resData = await res.json()
            console.log("resData>>",resData.data);
            let userApi   = await fetch("https://reqres.in/api/user");
            const userData = await userApi.json()
            console.log("userData>>",userData.data);
            // Promise.all([resData.data,userData.data]).then((a)=>{
            //     console.log("Promise data>>",a);
            // })
            serResponse(resData.data);
            return resData.data;
        } catch(e){
            console.log("error>>",e);
            return e;
        }
    }

    // First promise returns an array after a delay
    const getUsers = () => {
        return new Promise<MyObj[]>((resolve, reject) => {
            return setTimeout(
                () => resolve([{ id: 'jon' }, { id: 'andrey' }, { id: 'tania' }]),
                1000
            )
        })
    }
    // Second promise relies on the result of first promise
    const getIdFromUser = (user: MyObj) => {
        return new Promise<string>((resolve, reject) => {
            return setTimeout(() => resolve(user.id), 200)
        })
    }
    // Third promise relies on the result of the second promise
    const capitalizeIds = (id:string) => {
        return new Promise((resolve, reject) => {
            return setTimeout(() => resolve(id.toUpperCase()), 200)
        })
    }
    // Promise.all with Async/Await
    const runAsyncFunctions = async () => {
        const users = await getUsers()
        console.log("users", users)
        // let userId = await getIdFromUser(users[0]);
        Promise.all(users.map(async(a)=>{
            // let userId = getIdFromUser(a).then((aa)=>{
            //     console.log("userId>>",aa)
            // });
            let userId = await getIdFromUser(a);
            console.log("userId>>",userId)
            let capitalizedId  = await capitalizeIds(userId);
            console.log("capitalizedId>>",capitalizedId)
        }))
    }

    const updateCounter = () => {
        setCounter(counter+1);
    }

    return (
        <div>
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
            {response.length &&
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="table">Age</th>
                            <th className="table">Name</th>
                            <th className="table">Salary</th>
                        </tr>
                        {response.map((a) => {
                            return <tr key={a.id}>
                                <td className="table">{a.employee_age}</td>
                                <td className="table">{a.employee_name}</td>
                                <td className="table">{a.employee_salary}</td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Hello;