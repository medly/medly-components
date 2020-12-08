import React, { HTMLProps } from 'react';

export interface Props extends HTMLProps<HTMLDivElement> {
    /** You can use any react component as loader */
    loader?: React.ReactNode;
    /** You can set it true to show box with text and loader */
    withLoadingBox?: boolean;
    /** You can set it true to show overlay */
    withOverlay?: boolean;
}
