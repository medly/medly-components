import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import KeyboardArrowUpIconSvg from '../../assets/Hardware/keyboard_arrow_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const KeyboardArrowUpIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <KeyboardArrowUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

KeyboardArrowUpIcon.Style = SvgIcon;
KeyboardArrowUpIcon.displayName = 'KeyboardArrowUpIcon';

export default KeyboardArrowUpIcon
