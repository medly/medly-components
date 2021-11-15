import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import RadioButtonCheckedIconSvg from '../../assets/Toggle/radio_button_checked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RadioButtonCheckedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RadioButtonCheckedIcon';

const RadioButtonCheckedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RadioButtonCheckedIcon;
