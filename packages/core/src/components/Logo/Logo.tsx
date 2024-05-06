import { WithStyle } from '@medly-components/utils';
import type { FCC } from 'react';
import { Container } from './Logo.styled';
import MedlyLogo from './assets/MLogo.svg';
import MedlyLogoName from './assets/MedlyLogo.svg';
import { LogoProps } from './types';

const Logo: FCC<LogoProps> & WithStyle = ({ showName, logo, name, onClick }) => (
    <Container onClick={onClick}>
        {logo}
        {showName && name}
    </Container>
);

Logo.defaultProps = {
    showName: true,
    logo: <MedlyLogo />,
    name: <MedlyLogoName />
};
Logo.Style = Container;

export default Logo;
