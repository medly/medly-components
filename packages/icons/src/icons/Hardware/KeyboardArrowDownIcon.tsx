import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardArrowDownIconSvg from '../../assets/Hardware/keyboard_arrow_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowDownIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardArrowDownIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardArrowDownIcon.Style = SvgIcon;
KeyboardArrowDownIcon.displayName = 'KeyboardArrowDownIcon';

export default KeyboardArrowDownIcon
