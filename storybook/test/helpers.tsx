import React from 'react'
import { render } from '@testing-library/react'
import type { JSX } from 'react'


// const fn = createRender(Component) // HoF
// fn(props // props del componente)
export function createRender<TProps>(Component: React.ComponentType<TProps>) {
    return (props: JSX.IntrinsicAttributes & TProps) => ({
        ...render(<Component {...props} />, {})
    })
}