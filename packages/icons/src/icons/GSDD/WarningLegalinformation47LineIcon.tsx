import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation47LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_47_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation47LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation47LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation47LineIcon.Style = SvgIcon;
WarningLegalinformation47LineIcon.displayName = 'WarningLegalinformation47LineIcon';

export default WarningLegalinformation47LineIcon
