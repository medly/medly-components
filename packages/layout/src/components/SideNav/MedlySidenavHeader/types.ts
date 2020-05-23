import { SvgIconProps } from '@medly-components/icons';

export interface Props {
    companyLogo?: React.FunctionComponent<SvgIconProps>;
    companyName?: React.FunctionComponent<SvgIconProps>;
}

export interface HeaderStyledProps {
    isHovered?: boolean;
    isExpanded?: boolean;
}
