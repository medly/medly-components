import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RotateLeftIconSvg from '../../assets/Image/rotate_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RotateLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <RotateLeftIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

RotateLeftIcon.Style = SvgIcon;
RotateLeftIcon.displayName = 'RotateLeftIcon';

export default RotateLeftIcon
