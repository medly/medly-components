import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import KeyboardArrowLeftIconSvg from '../../assets/Hardware/keyboard_arrow_left_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowLeftIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardArrowLeftIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardArrowLeftIcon.Style = SvgIcon;
KeyboardArrowLeftIcon.displayName = 'KeyboardArrowLeftIcon';

export default KeyboardArrowLeftIcon
