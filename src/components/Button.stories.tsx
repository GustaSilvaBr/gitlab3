import {Button, ButtonProps} from './Button';
import {Meta, StoryObj} from '@storybook/react';


export default {
    tittle: 'Components/Text',
    component: Button,
    args:{
        children:'Default button'
    }
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const CustomComponent: StoryObj<ButtonProps> = {
    args:{
        asChild:true,
        children:<a href="#">Alternative button</a>
    }
};

