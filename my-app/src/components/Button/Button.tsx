import React, {useContext} from "react";
import classes from './Button.module.css';
import Context from "../../Context";
import {UserDataState} from "../Form";

interface Props {
    usersData?: UserDataState
}

export const Button: React.FC<Props> = (props) => {
    const {state, setState} = useContext(Context);
    const {usersData} = props;

    const handleClick = () => {
        if (state.condition === 'input') setState(prevState => (
            {...prevState, condition: "result", postcard: usersData?.card, greetings: usersData?.text}));
    }

    const btnDisabled = usersData?.card === '' || usersData?.text === '';

    return (
        <button type="button"
                className={btnDisabled ? `${classes.button} ${classes.buttonDisabled}`: classes.button}
                onClick={handleClick}
        >
            {state.condition === 'input' && "Далее"}
            {state.condition === 'result' && "Отправить"}
        </button>
    );
};