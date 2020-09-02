import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation156LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_156_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation156LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation156LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation156LineIcon.Style = SvgIcon;
WarningLegalinformation156LineIcon.displayName = 'WarningLegalinformation156LineIcon';

export default WarningLegalinformation156LineIcon
