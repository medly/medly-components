import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import GavelIconSvg from '../../assets/Action/gavel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GavelIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <GavelIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

GavelIcon.Style = SvgIcon;
GavelIcon.displayName = 'GavelIcon';

export default GavelIcon
