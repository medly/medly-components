import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import RadioButtonUncheckedIconSvg from '../../assets/Toggle/radio_button_unchecked_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RadioButtonUncheckedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RadioButtonUncheckedIcon';

const RadioButtonUncheckedIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RadioButtonUncheckedIcon;
