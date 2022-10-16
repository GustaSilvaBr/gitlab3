import { ReactNode } from 'react';
import {clsx} from 'clsx';
import {InputHTMLAttributes} from 'react';


function TextInputIcon(){}


export interface TextInputRootProps{
    children: ReactNode,
}

function TextInputRoot(props:TextInputRootProps){
    return(
        <div className={clsx(
            'flex items-center gap-3',
            'px-4 py-3 bg-gray-800 rounded w-full',
            'focus-within:ring-2 ring-cyan-300'
        )}>
            {props.children}
        </div>
    )
}


export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function TextInputInput(props:TextInputInputProps){

    return (
        <input  className={clsx(
            'bg-transparent flex-1',
            'placeholder:text-gray-400',
            'text-gray-100 text-xs',
            'outline-none '
        )}
            {... props}//Recebe todo tipo de propriedade que um input receberia
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
}
