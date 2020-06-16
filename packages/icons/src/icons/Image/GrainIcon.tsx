import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GrainIconSvg from '../../assets/Image/grain_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GrainIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GrainIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GrainIcon.Style = SvgIcon;
GrainIcon.displayName = 'GrainIcon';

export default GrainIcon
