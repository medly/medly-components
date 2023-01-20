import { Logo } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import { FC, memo, useContext } from 'react';
import SideNavContext from '../SideNav.context';
import * as Styled from './MedlySidenavHeader.styled';
import { Props } from './types';

const Component: FC<Props> = memo(({ companyLogo, companyName }) => {
    const { isHovered, isExpanded } = useContext(SideNavContext);
    return (
        <Styled.SidenavHeader as="div" isHovered={isHovered} isExpanded={isExpanded}>
            <Logo name={companyName} logo={companyLogo} />
        </Styled.SidenavHeader>
    );
});

Component.displayName = 'SidenavHeader';

export const MedlySidenavHeader: FC<Props> & WithStyle = Object.assign(Component, { Style: Styled.SidenavHeader });
