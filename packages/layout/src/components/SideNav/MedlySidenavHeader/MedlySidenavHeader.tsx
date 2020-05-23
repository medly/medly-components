import { WithStyle } from '@medly-components/utils';
import React, { SFC, useContext } from 'react';
import SideNavContext from '../SideNav.context';
import MedlyLogo from './MedlyLogos/MedlyLogo.svg';
import MLogo from './MedlyLogos/MLogo.svg';
import * as Styled from './MedlySidenavHeader.styled';
import { Props } from './types';

export const MedlySidenavHeader: SFC<Props> & WithStyle = React.memo(({ companyLogo: Logo, companyName: Name }) => {
    const { isHovered, isExpanded } = useContext(SideNavContext);
    return (
        <Styled.SidenavHeader as="div" isHovered={isHovered} isExpanded={isExpanded}>
            <Logo />
            <Name />
        </Styled.SidenavHeader>
    );
});
MedlySidenavHeader.defaultProps = {
    companyLogo: MLogo,
    companyName: MedlyLogo
};

MedlySidenavHeader.displayName = 'SidenavHeader';
MedlySidenavHeader.Style = Styled.SidenavHeader;
