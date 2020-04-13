import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MmsIconSvg from '../../assets/Notification/mms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MmsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MmsIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MmsIcon.Style = SvgIcon;
MmsIcon.displayName = 'MmsIcon';

export default MmsIcon
