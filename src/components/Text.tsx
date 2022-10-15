import {clsx} from 'clsx';

export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children:string

}

export function Text({size = 'md', children}: TextProps){
    return(
        <span className={clsx(
            'text-gray-100 font-sans',//default style to the element
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }/*conditionals styles to the element |
             model: 'style':'property' 'conditional' 'value'*/
        )}>
            {children}
        </span>
    )
}