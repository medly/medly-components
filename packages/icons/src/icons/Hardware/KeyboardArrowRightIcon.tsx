import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardArrowRightIconSvg from '../../assets/Hardware/keyboard_arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <KeyboardArrowRightIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

KeyboardArrowRightIcon.Style = SvgIcon;
KeyboardArrowRightIcon.displayName = 'KeyboardArrowRightIcon';

export default KeyboardArrowRightIcon
