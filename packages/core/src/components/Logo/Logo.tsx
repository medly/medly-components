import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import MedlyLogoName from './assets/MedlyLogo.svg';
import MedlyLogo from './assets/MLogo.svg';
import { Container } from './Logo.styled';
import { LogoProps } from './types';

const Logo: FC<LogoProps> & WithStyle = ({ showName, logo, name, onClick }) => (
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
