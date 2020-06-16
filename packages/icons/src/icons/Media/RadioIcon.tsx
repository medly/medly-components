import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RadioIconSvg from '../../assets/Media/radio_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RadioIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RadioIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RadioIcon.Style = SvgIcon;
RadioIcon.displayName = 'RadioIcon';

export default RadioIcon
