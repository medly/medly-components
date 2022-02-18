import { HTMLProps } from '@medly-components/utils';
import type { ReactNode } from 'react';

export interface CenterAlignedProps extends HTMLProps<HTMLDivElement> {
    /** Set it true to show the box with text and loader */
    withLoadingBox?: boolean;
    /** Set it true to show overlay */
    withOverlay?: boolean;
    /** Use it to set the position of a wrapper component */
    position?: 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';
}

export interface CenterAlignedLoaderProps extends CenterAlignedProps {
    /** Use any react component as a loader */
    loader?: ReactNode;
}
