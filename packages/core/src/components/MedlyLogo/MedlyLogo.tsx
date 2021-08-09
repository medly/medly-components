import React from 'react';
import { Container } from './MedlyLogo.styled';
import Logo from '@medly-components/layout/src/components/SideNav/MedlySidenavHeader/MedlyLogos/MLogo.svg';
import Name from '@medly-components/layout/src/components/SideNav/MedlySidenavHeader/MedlyLogos/MedlyLogo.svg';

const MedlyLogo: React.FC<{ showName: boolean }> = ({ showName }) => (
    <Container>
        <Logo />
        {showName && <Name />}
    </Container>
);

export default MedlyLogo;
