import * as React from 'react'
import type { Props } from './Button.props'
import * as Styled from './Button.styled'
export const Button: React.FC<Props> = ({ variant, children, onClick, ...props }) => {
    return (
        <Styled.Button variant={variant} onClick={onClick} {...props}>
            {children}
        </Styled.Button>
    )
}

// pagina que implementa componente

/*
    const [buttonVariant, setButtonVariant] = React.useState('default')

    function onButtonClick() {
        setButtonVariant('otro')
    }
    <Button variant={buttonVariant} onClick={onButtonClick}>
        bla
    </Button>

*/