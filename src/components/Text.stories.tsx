import {Meta, StoryObj} from '@storybook/react';//Tipagens

import {Text, TextProps} from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children:'test text'
    }//it's like props from react components
} as Meta<TextProps>;//Global component setup

//variante padrão
export const Default: StoryObj<TextProps> ={};

//Variantes do componente documentado
export const Small: StoryObj<TextProps> = {
    args:{
        size:"sm",
    }
};

export const Large: StoryObj<TextProps> = {
    args:{
        size:"lg",
    }
};