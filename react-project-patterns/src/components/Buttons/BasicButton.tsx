import { ButtonProps } from "./types"

export const BasicButton = ({children, ...props}: ButtonProps): React.JSX.Element => {
    return (
        <button {...props}>
            {children}
        </button>
    )
}