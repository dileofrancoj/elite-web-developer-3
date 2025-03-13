import { ButtonType } from "../../../types/Button"
import { ActionButton } from "../ActionButton"
import { BasicButton } from "../BasicButton"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

type ButtonComponentType = {[key in ButtonType] : React.FC<ButtonProps>}

export const buttonComponents: ButtonComponentType = {
    'basic': BasicButton,
    'action': ActionButton,
}

export interface ButtonFactoryProps extends ButtonProps {
    buttonType?: ButtonType
    // chidren
    // tipado de boton html 
}