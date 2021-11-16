import { HTMLProps as ReactHTMLProps, RefObject } from 'react';
import { Omit } from './Omit';

type HTMLPropsReact<T> = Omit<ReactHTMLProps<T>, 'ref' | 'as'>;

export interface HTMLProps<T> extends HTMLPropsReact<T> {
    ref?: ((instance: T) => void) | RefObject<T> | null;
}
