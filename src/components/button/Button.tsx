import { ButtonFunc } from "../models"

export default function ButtonPlus(props: ButtonFunc) {
    const f2: Function | any = props.addClick;
    const f3: Function | any = props.minusClick;
    return (
        <>
            <button onClick={f2}>+1</button>
            <button onClick={f3}>-1</button>
        </>
    )
}