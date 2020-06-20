import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OpacityIconSvg from '../../assets/Action/opacity_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpacityIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OpacityIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OpacityIcon.Style = SvgIcon;
OpacityIcon.displayName = 'OpacityIcon';

export default OpacityIcon
