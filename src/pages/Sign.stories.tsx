import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './SignIn';


export default{
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {},
} as Meta

export const Default: StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'rodrigop@gmail.com') ///testa o email
        userEvent.type(canvas.getByPlaceholderText('******'), '123456') ///testa a senha


        userEvent.click(canvas.getByRole('button')) ///ao clicar no botao


        ///fica retornando ate os texto aparecer na tela
        await waitFor(() => {
            return expect(canvas.getByText('Login Realizado')).toBeInTheDocument() 
        })
    }
} 