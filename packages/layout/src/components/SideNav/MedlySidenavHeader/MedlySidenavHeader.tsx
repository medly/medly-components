import { Logo } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useContext } from 'react';
import SideNavContext from '../SideNav.context';
import * as Styled from './MedlySidenavHeader.styled';
import { Props } from './types';

export const MedlySidenavHeader: FC<Props> & WithStyle = React.memo(({ companyLogo: CompanyLogo, companyName: CompanyName }) => {
    const { isHovered, isExpanded } = useContext(SideNavContext);
    return (
        <Styled.SidenavHeader as="div" isHovered={isHovered} isExpanded={isExpanded}>
            <Logo name={CompanyName && <CompanyName />} logo={CompanyLogo && <CompanyLogo />} />
        </Styled.SidenavHeader>
    );
});

MedlySidenavHeader.displayName = 'SidenavHeader';
MedlySidenavHeader.Style = Styled.SidenavHeader;
