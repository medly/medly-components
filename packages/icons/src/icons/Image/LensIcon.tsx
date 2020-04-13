import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LensIconSvg from '../../assets/Image/lens_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LensIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LensIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LensIcon.Style = SvgIcon;
LensIcon.displayName = 'LensIcon';

export default LensIcon
