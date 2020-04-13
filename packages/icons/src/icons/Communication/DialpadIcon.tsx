import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DialpadIconSvg from '../../assets/Communication/dialpad_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DialpadIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <DialpadIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

DialpadIcon.Style = SvgIcon;
DialpadIcon.displayName = 'DialpadIcon';

export default DialpadIcon
