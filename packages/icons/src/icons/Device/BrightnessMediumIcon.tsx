import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import BrightnessMediumIconSvg from '../../assets/Device/brightness_medium_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BrightnessMediumIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BrightnessMediumIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BrightnessMediumIcon.Style = SvgIcon;
BrightnessMediumIcon.displayName = 'BrightnessMediumIcon';

export default BrightnessMediumIcon
