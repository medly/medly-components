import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PinDropIconSvg from '../../assets/Maps/pin_drop_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PinDropIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <PinDropIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

PinDropIcon.Style = SvgIcon;
PinDropIcon.displayName = 'PinDropIcon';

export default PinDropIcon
