import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import VisibilityOffIconSvg from '../../assets/Forms/VisibilityOff.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const VisibilityOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <VisibilityOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

VisibilityOffIcon.Style = SvgIcon;
VisibilityOffIcon.displayName = 'VisibilityOffIcon';

export default VisibilityOffIcon
