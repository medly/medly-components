import React, { Ref } from 'react';
import { Omit } from './Omit';

type HTMLPropsReact<T> = Omit<React.HTMLProps<T>, 'ref' | 'as'>;

export interface HTMLProps<T> extends HTMLPropsReact<T> {
    ref?: ((instance: T) => void) | Ref<T> | undefined;
}
