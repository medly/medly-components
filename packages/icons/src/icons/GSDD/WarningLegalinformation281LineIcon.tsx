import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation281LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_281_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation281LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation281LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation281LineIcon.Style = SvgIcon;
WarningLegalinformation281LineIcon.displayName = 'WarningLegalinformation281LineIcon';

export default WarningLegalinformation281LineIcon
