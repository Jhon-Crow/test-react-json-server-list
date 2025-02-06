import ButtonMT, {type ButtonProps as MButtonProps} from '@mui/material/Button';
import {memo} from "react";

interface ButtonProps extends Omit<MButtonProps, 'onClick'>{
    onClick: () => void;
}

const Button = memo((props: ButtonProps) => {
    const {onClick, children, ...otherProps} = props;

    const onClickHandler = () => onClick();

    return (
        <ButtonMT
            {...otherProps}
            onClick={onClickHandler}
        >
            {children}
        </ButtonMT>
    );
});

export default Button;