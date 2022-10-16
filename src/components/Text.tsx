import { ReactNode } from 'react';
import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children:ReactNode//ReactNode -> any valid thing as children in react
    asChild?: boolean
}

export function Text({size = 'md', children, asChild}: TextProps){
    const Comp = asChild ? Slot : 'span';

    return(
        <Comp className={clsx(
            'text-gray-100 font-sans',//default style to the element
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