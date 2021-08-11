import Logo from '@medly-components/core/src/components/Logo';
import { HomeIcon, LockIcon, PillIcon } from '@medly-components/icons';
import { defaultTheme } from '@medly-components/theme';
import { useMediaQuery } from '@medly-components/utils';
import { HeaderTheme } from 'packages/theme/src/layout/header/types';
import React, { FC } from 'react';
import Header from './Header';
import { Context } from './Header.context';
import { HeaderStaticProps } from './types';

export const Theme: FC<HeaderTheme> = () => null;
Theme.defaultProps = {
    ...defaultTheme.header
};

export const StaticProps: FC<HeaderStaticProps> = () => null;
export const ContextTheme: FC<Context> = () => null;

export const FullSetup = () => {
    const isNotMobile = useMediaQuery(`@media (min-width: ${defaultTheme.header.breakpoints.mobile})`);
    return (
        <Header>
            <Logo showName={isNotMobile} />
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
