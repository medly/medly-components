import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KeyboardArrowDownIconSvg from '../../assets/Hardware/keyboard_arrow_down_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowDownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardArrowDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardArrowDownIcon.Style = SvgIcon;
KeyboardArrowDownIcon.displayName = 'KeyboardArrowDownIcon';

export default KeyboardArrowDownIcon
