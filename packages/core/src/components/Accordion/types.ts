import { WithStyle } from '@medly-components/utils';
import type { Context, Dispatch, FC, SetStateAction } from 'react';

export type StaticProps = {
    Header: FC & WithStyle;
    Content: FC & WithStyle;
    Context: Context<AccordionContextType>;
};

export type AccordionContextType = [
    boolean /** Current active state */,
    Dispatch<SetStateAction<boolean>> /** Function to be called to toggle the active state */
];

export type AccordionProps = {
    defaultActive?: boolean;
    active?: boolean;
    onChange?: Dispatch<SetStateAction<boolean>>;
};
