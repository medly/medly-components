import { Logo } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React, { FC, useContext } from 'react';
import SideNavContext from '../SideNav.context';
import * as Styled from './MedlySidenavHeader.styled';
import { Props } from './types';

const Component: FC<Props> = React.memo(({ companyLogo: CompanyLogo, companyName: CompanyName }) => {
    const { isHovered, isExpanded } = useContext(SideNavContext);
    return (
        <Styled.SidenavHeader as="div" isHovered={isHovered} isExpanded={isExpanded}>
            <Logo name={CompanyName && <CompanyName />} logo={CompanyLogo && <CompanyLogo />} />
        </Styled.SidenavHeader>
    );
});

Component.displayName = 'SidenavHeader';

export const MedlySidenavHeader: FC<Props> & WithStyle = Object.assign(Component, { Style: Styled.SidenavHeader });
