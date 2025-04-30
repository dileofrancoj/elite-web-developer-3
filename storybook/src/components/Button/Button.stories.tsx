import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'success'],
            description: 'The visual style of button',
            control: {type: 'radio'}
        }
    },
    args: {onClick: fn()}
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Prueba'
    }
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: <p>Test</p>
    }
}