import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CastIconSvg from '../../assets/Hardware/cast_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CastIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CastIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CastIcon.Style = SvgIcon;
CastIcon.displayName = 'CastIcon';

export default CastIcon
