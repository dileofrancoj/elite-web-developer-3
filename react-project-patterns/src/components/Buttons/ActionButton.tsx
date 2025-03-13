import { ButtonProps } from "./types"

export const ActionButton: React.FC<ButtonProps> = ({children, ...props}) => {
    return (
        <button {...props} style={{background: 'black', color: 'gray', border: '1px solid darkgray'}}>
            {children}
        </button>
    )
}
