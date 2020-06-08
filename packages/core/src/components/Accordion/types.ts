import { Props as TitleProps } from './Title';

export interface Props {
    Title?: React.SFC<TitleProps>;
    Content?: React.SFC;
}

export interface AccordionContextProps {
    isActive?: boolean;
    toggle?: () => void;
}
