import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation64LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_64_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation64LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation64LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation64LineIcon.Style = SvgIcon;
WarningLegalinformation64LineIcon.displayName = 'WarningLegalinformation64LineIcon';

export default WarningLegalinformation64LineIcon
