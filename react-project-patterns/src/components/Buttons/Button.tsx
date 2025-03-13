import * as React from 'react'
import { BasicButton } from './BasicButton'
import { buttonComponents, ButtonFactoryProps,  } from './types'


export const ButtonFactory: React.FC<ButtonFactoryProps> = ({buttonType= 'basic',children, ...props}) => {
    const SelectedButton = buttonComponents[buttonType] ?? BasicButton
    return <SelectedButton {...props}>{children}</SelectedButton>
}