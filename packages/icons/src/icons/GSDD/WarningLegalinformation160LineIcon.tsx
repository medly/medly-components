import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation160LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_160_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation160LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation160LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation160LineIcon.Style = SvgIcon;
WarningLegalinformation160LineIcon.displayName = 'WarningLegalinformation160LineIcon';

export default WarningLegalinformation160LineIcon
