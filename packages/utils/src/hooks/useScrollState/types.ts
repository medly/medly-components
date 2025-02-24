import type { Dispatch, RefObject } from 'react';

export interface ScrollState {
    scrolledToTop: boolean;
    scrolledToBottom: boolean;
    scrollPosition: number;
}

interface ScrolledToTopAction {
    type: 'scrolledToTop';
    value: boolean;
}

interface ScrolledToBottomAction {
    type: 'scrolledToBottom';
    value: boolean;
}

interface ScrollPositionAction {
    type: 'scrollPosition';
    value: number;
}

export type ScrollActionTypes = ScrolledToTopAction | ScrolledToBottomAction | ScrollPositionAction;

export interface UseScrollStateProps {
    scrollState: ScrollState;
    ref: RefObject<HTMLDivElement>;
    dispatch: Dispatch<ScrollActionTypes>;
    buffer?: number;
}
