import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import OutlinedFlagIconSvg from '../../assets/Content/outlined_flag_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OutlinedFlagIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OutlinedFlagIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OutlinedFlagIcon.Style = SvgIcon;
OutlinedFlagIcon.displayName = 'OutlinedFlagIcon';

export default OutlinedFlagIcon
