import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LabelOffIconSvg from '../../assets/Action/label_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LabelOffIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LabelOffIcon.Style = SvgIcon;
LabelOffIcon.displayName = 'LabelOffIcon';

export default LabelOffIcon
