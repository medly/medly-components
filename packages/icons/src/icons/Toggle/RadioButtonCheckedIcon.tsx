import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RadioButtonCheckedIconSvg from '../../assets/Toggle/radio_button_checked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioButtonCheckedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RadioButtonCheckedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RadioButtonCheckedIcon.Style = SvgIcon;
RadioButtonCheckedIcon.displayName = 'RadioButtonCheckedIcon';

export default RadioButtonCheckedIcon
