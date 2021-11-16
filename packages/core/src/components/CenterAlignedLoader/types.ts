import { HTMLProps } from '@medly-components/utils';
import type { ReactNode } from 'react';

export interface CenterAlignedProps extends HTMLProps<HTMLDivElement> {
    /** You can set it true to show box with text and loader */
    withLoadingBox?: boolean;
    /** You can set it true to show overlay */
    withOverlay?: boolean;
    /** You can use this to set position of wrapper component */
    position?: 'static' | 'absolute' | 'fixed' | 'relative' | 'sticky' | 'initial' | 'inherit';
}

export interface CenterAlignedLoaderProps extends CenterAlignedProps {
    /** You can use any react component as loader */
    loader?: ReactNode;
}
