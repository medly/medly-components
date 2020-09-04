import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation71LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_71_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation71LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation71LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation71LineIcon.Style = SvgIcon;
WarningLegalinformation71LineIcon.displayName = 'WarningLegalinformation71LineIcon';

export default WarningLegalinformation71LineIcon
