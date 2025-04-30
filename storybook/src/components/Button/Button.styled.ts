import styled from "styled-components";

import type { VariantProps } from "./Button.props";

interface ButtonProps {
    variant: VariantProps
}

// la config de colores, tipografía, etc, deberia vivir en un theme o en un file de constantes globales al DS
export const getButtonColor = (variant: VariantProps): string => {
    switch(variant) {
        case "primary":
            return "#007bff"
        case "secondary":
            return "#6c757d"
        case "success":
            return "green"
        default: 
            return "#007bff"
    }
}


export const Button = styled.button<ButtonProps>`
    display: inline-block;
    font-weight: 500;
    text-align: center;
    vertical-align: middle;
    border: 1px solid transparent;
    font-size: 1rem;
    border-radius: 6px;
    line-height: 1.5;
    color: #fff;
    padding: 4px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    background-color: ${(props) => getButtonColor(props.variant) }
`