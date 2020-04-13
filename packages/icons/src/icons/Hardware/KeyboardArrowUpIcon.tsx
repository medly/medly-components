import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardArrowUpIconSvg from '../../assets/Hardware/keyboard_arrow_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardArrowUpIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardArrowUpIcon.Style = SvgIcon;
KeyboardArrowUpIcon.displayName = 'KeyboardArrowUpIcon';

export default KeyboardArrowUpIcon
