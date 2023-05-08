import React from 'react';

interface ButtonComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
    text: string
    disabled?: boolean
}

export default function ButtonComponent(props: ButtonComponentProps) {
    const { text, ...buttonProps} = props;
    return(
        <button {...buttonProps}>
            {text}
        </button>
    )
}