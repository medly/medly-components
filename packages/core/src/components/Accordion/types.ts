import { Props as TitleProps } from './Title';

export interface StaticProps {
    Title?: React.SFC<TitleProps>;
    Content?: React.SFC;
}

export interface AccordionContextProps {
    isActive?: boolean;
    toggle?: () => void;
}
