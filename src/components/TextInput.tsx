import { ReactNode } from 'react';
import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import {InputHTMLAttributes} from 'react';

export interface TextInputIconProps{
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps){
    return(
        <Slot className={clsx(
            'w-6h h-6 text-gray-400'
        )}>
            {props.children}
        </Slot> 
    )
}

TextInputIcon.displayName = 'TextInput.Icon';//Naming the display to show in the storybooks

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

TextInputRoot.displayName = "TextInput.Root";

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

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}
