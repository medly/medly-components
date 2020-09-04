import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation66LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_66_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation66LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation66LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation66LineIcon.Style = SvgIcon;
WarningLegalinformation66LineIcon.displayName = 'WarningLegalinformation66LineIcon';

export default WarningLegalinformation66LineIcon
