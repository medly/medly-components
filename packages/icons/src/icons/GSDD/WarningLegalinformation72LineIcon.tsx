import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation72LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_72_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation72LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation72LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation72LineIcon.Style = SvgIcon;
WarningLegalinformation72LineIcon.displayName = 'WarningLegalinformation72LineIcon';

export default WarningLegalinformation72LineIcon
