import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ModeIconSvg from '../../assets/Editor/mode_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ModeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ModeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ModeIcon.Style = SvgIcon;
ModeIcon.displayName = 'ModeIcon';

export default ModeIcon
