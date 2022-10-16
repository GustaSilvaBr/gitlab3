import {Meta, StoryObj} from '@storybook/react';//Tipagens

import {Text, TextProps} from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args:{
        children:'test text',
        size:'md',
    },//it's like props from react components
    argTypes:{
        size:{
            options:['sm', 'md', 'lg'],
            control:{
                type:'inline-radio'
            }
        }//size controls
    }
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

export const CustomComponent: StoryObj<TextProps> = {
    args:{
        asChild: true,
        children:<a href="www.youtube.com">I'm paragraph!</a>
    },
    argTypes:{
        children:{
            table:{
                disable:true,
            },//disable children's props presentation
        }
    }
}