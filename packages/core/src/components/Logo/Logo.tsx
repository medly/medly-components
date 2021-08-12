import React from 'react';
import MedlyLogoName from './assets/MedlyLogo.svg';
import MedlyLogo from './assets/MLogo.svg';
import { Container } from './Logo.styled';
import { LogoProps } from './types';

const Logo: React.FC<LogoProps> = ({ showName, logo, name }) => (
    <Container>
        {logo}
        {showName && name}
    </Container>
);

Logo.defaultProps = {
    showName: true,
    logo: <MedlyLogo />,
    name: <MedlyLogoName />
};

export default Logo;
