import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation70LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_70_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation70LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation70LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation70LineIcon.Style = SvgIcon;
WarningLegalinformation70LineIcon.displayName = 'WarningLegalinformation70LineIcon';

export default WarningLegalinformation70LineIcon
