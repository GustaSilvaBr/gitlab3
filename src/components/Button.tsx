import {ReactNode} from 'react';
import {Slot} from '@radix-ui/react-slot';
import {clsx} from 'clsx';

export interface ButtonProps {
    asChild?: boolean,
    children:ReactNode,
}

export function Button({asChild, children}:ButtonProps){
    const Comp = asChild ? Slot : 'button';

    return(
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-500 hover:bg-cyan-300 transition-colors w-full rounded',
            'focus:ring-2 ring-white',
            'text-neutral-black text-sm font-semibold sans '
        )}>
            {children}
        </Comp>
    )
}