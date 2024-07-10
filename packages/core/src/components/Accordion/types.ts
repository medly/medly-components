import { HTMLProps, WithStyle } from '@medly-components/utils';
import type { Context, Dispatch, FC, SetStateAction } from 'react';

export type StaticProps = {
    Header: FC<HeaderProps> & WithStyle;
    Content: FC<ContentProps> & WithStyle;
    Context: Context<AccordionContextType>;
};

export type AccordionContextType = [
    boolean /** Current active state */,
    Dispatch<SetStateAction<boolean>> /** Function to be called to toggle the active state */
];

export type AccordionProps = Omit<HTMLProps<HTMLDivElement>, 'onChange'> & {
    /** Use to render any component as Button */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /** Set it true to open the accordion by default */
    defaultActive?: boolean;
    /** If you want to handle the active state then pass it along with onChange */
    active?: boolean;
    /** If you want to handle the active state then pass it along with active */
    onChange?: Dispatch<SetStateAction<boolean>>;
    /** Set it to change the color of the icon */
    iconColor?: string;
};

export type HeaderProps = {
    iconColor?: string;
};

export type ContentProps = HTMLProps<HTMLDivElement> & {
    /** Use to render any component as Accordion content */
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
