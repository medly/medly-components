import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation157LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_157_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation157LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation157LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation157LineIcon.Style = SvgIcon;
WarningLegalinformation157LineIcon.displayName = 'WarningLegalinformation157LineIcon';

export default WarningLegalinformation157LineIcon
