import { JSX } from "react"

export type VariantProps = 'primary' | 'secondary' | 'success'

export interface Props {
    variant?: VariantProps
    onClick: () => void
    children: JSX.Element
}