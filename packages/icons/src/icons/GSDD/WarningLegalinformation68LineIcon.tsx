import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation68LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_68_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation68LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation68LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation68LineIcon.Style = SvgIcon;
WarningLegalinformation68LineIcon.displayName = 'WarningLegalinformation68LineIcon';

export default WarningLegalinformation68LineIcon
