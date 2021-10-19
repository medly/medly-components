import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BrightnessMediumIconSvg from '../../assets/Device/brightness_medium_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrightnessMediumIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'BrightnessMediumIcon';

const BrightnessMediumIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default BrightnessMediumIcon;
