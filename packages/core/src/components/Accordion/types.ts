import type { Context, Dispatch, FC, SetStateAction } from 'react';

export type StaticProps = {
    Header: FC<HeaderProps>;
    Content: FC;
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
    iconColor?: string;
};

export type HeaderProps = {
    iconColor?: string;
};
