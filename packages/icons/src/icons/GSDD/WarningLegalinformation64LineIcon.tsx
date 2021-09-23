import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation64LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_64_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation64LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'WarningLegalinformation64LineIcon';

const WarningLegalinformation64LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default WarningLegalinformation64LineIcon
