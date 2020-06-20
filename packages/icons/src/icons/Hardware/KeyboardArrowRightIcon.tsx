import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KeyboardArrowRightIconSvg from '../../assets/Hardware/keyboard_arrow_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowRightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardArrowRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardArrowRightIcon.Style = SvgIcon;
KeyboardArrowRightIcon.displayName = 'KeyboardArrowRightIcon';

export default KeyboardArrowRightIcon
