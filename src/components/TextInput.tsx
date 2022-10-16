import { ReactNode } from 'react';
import {clsx} from 'clsx';
import {InputHTMLAttributes} from 'react';


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function TextInput(props:TextInputProps){



    return (
        <input  className={clsx(
            'px-4 py-3 bg-gray-800 rounded placeholder:text-gray-400 w-full',
            'text-gray-100 text-xs',
            'outline-none focus:ring-2 ring-cyan-300'
        )}
        {... props}//Recebe todo tipo de propriedade que um input receberia
        />
    )
}