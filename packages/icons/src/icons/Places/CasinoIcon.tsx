import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CasinoIconSvg from '../../assets/Places/casino_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CasinoIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CasinoIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CasinoIcon.Style = SvgIcon;
CasinoIcon.displayName = 'CasinoIcon';

export default CasinoIcon
