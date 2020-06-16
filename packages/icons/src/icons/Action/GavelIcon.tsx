import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GavelIconSvg from '../../assets/Action/gavel_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GavelIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GavelIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GavelIcon.Style = SvgIcon;
GavelIcon.displayName = 'GavelIcon';

export default GavelIcon
