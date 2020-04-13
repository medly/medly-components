import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CastIconSvg from '../../assets/Hardware/cast_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <CastIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

CastIcon.Style = SvgIcon;
CastIcon.displayName = 'CastIcon';

export default CastIcon
