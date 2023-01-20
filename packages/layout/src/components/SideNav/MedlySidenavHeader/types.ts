import { LogoProps } from '@medly-components/core';

export interface Props {
    companyLogo?: LogoProps['logo'];
    companyName?: LogoProps['name'];
}

export interface HeaderStyledProps {
    isHovered?: boolean;
    isExpanded?: boolean;
}
