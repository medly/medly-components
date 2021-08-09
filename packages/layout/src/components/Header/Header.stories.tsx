import React from 'react';
import Header from './Header';
import MedlyLogo from '@medly-components/core/src/components/MedlyLogo';
import { useMediaQuery } from '@medly-components/utils';

export const Basic = () => {
    return (
        <div style={{ position: 'fixed', width: '100%', height: '100%', left: 0, top: 0 }}>
            <Header>
                <MedlyLogo showName={useMediaQuery(`@media (min-width: 960px)`)} />
                <Header.Nav>
                    <Header.NavItem isActive>Item 1</Header.NavItem>
                    <Header.NavItem>Item 2</Header.NavItem>
                    <Header.NavItem>Item 3</Header.NavItem>
                </Header.Nav>
                <div>Logout</div>
            </Header>
        </div>
    );
};
