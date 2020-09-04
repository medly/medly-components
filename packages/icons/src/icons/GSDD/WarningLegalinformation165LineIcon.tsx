import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation165LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_165_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation165LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation165LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation165LineIcon.Style = SvgIcon;
WarningLegalinformation165LineIcon.displayName = 'WarningLegalinformation165LineIcon';

export default WarningLegalinformation165LineIcon
