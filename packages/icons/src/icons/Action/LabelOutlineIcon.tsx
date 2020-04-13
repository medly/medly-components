import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LabelOutlineIconSvg from '../../assets/Action/label_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LabelOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LabelOutlineIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LabelOutlineIcon.Style = SvgIcon;
LabelOutlineIcon.displayName = 'LabelOutlineIcon';

export default LabelOutlineIcon
