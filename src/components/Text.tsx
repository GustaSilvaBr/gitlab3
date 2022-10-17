import { ReactNode } from 'react';
import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';

export interface TextProps {
    color?: 'text-gray-100' | 'text-gray-200' |'text-gray-400';
    size?: 'sm' | 'md' | 'lg';
    children:ReactNode//ReactNode -> any valid thing as children in react
    asChild?: boolean
}

export function Text({color = 'text-gray-100', size = 'md', children, asChild}: TextProps){
    const Comp = asChild ? Slot : 'span';

    return(
        <Comp className={clsx(
            color,
            'font-sans',//default style to the element
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }/*conditionals styles to the element |
             model: 'style':'property' 'conditional' 'value'*/
        )}>
            {children}
        </Comp>
    )
}