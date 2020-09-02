import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation209LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_209_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WarningLegalinformation209LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation209LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WarningLegalinformation209LineIcon.Style = SvgIcon;
WarningLegalinformation209LineIcon.displayName = 'WarningLegalinformation209LineIcon';

export default WarningLegalinformation209LineIcon
