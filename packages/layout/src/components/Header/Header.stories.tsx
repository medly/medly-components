import MedlyLogo from '@medly-components/core/src/components/MedlyLogo';
import { HomeIcon, LockIcon, PillIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { useMediaQuery } from '@medly-components/utils';
import React from 'react';
import Header from './Header';

export const FullSetup = () => {
    const isDesktop = useMediaQuery(`@media (min-width: 960px)`);
    return (
        <Header>
            <MedlyLogo showName={isDesktop} />
            <Header.Nav>
                <Header.NavItem isActive>
                    <HomeIcon size="S" iconColor={defaultTheme.colors.white} />
                    My Dashboard
                </Header.NavItem>
                <Header.NavItem>
                    <PillIcon size="S" iconColor={defaultTheme.colors.white} />
                    Prescriptions
                </Header.NavItem>
                <Header.NavItem>
                    <LockIcon size="S" iconColor={defaultTheme.colors.white} />
                    Security
                </Header.NavItem>
            </Header.Nav>
            <div>Logout</div>
        </Header>
    );
};
