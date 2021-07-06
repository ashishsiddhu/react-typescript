import { useContext } from "react";
// import { TodosDispatch } from "./Counter";

interface Type {
    count: number
}
const CounterChild: React.FC<Type> = (props) => {
    // If we want to perform an action, we can get dispatch from context.
    // const dispatch = useContext(TodosDispatch);
    // function handleClick() {
    //     dispatch({ cou: 'add' });
    //   }
    return (
        <div>{props.count}</div>
    )
}

export default CounterChild;