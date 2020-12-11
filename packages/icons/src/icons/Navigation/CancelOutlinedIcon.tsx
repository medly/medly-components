import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CancelOutlinedIconSvg from '../../assets/Navigation/cancel_outlined_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CancelOutlinedIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CancelOutlinedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CancelOutlinedIcon.Style = SvgIcon;
CancelOutlinedIcon.displayName = 'CancelOutlinedIcon';

export default CancelOutlinedIcon
