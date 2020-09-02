import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation67LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_67_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation67LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation67LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation67LineIcon.Style = SvgIcon;
WarningLegalinformation67LineIcon.displayName = 'WarningLegalinformation67LineIcon';

export default WarningLegalinformation67LineIcon
