import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LensIconSvg from '../../assets/Image/lens_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LensIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LensIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LensIcon.Style = SvgIcon;
LensIcon.displayName = 'LensIcon';

export default LensIcon
