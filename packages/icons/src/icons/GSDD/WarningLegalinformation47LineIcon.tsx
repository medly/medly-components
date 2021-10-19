import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WarningLegalinformation47LineIconSvg from '../../assets/GSDD/Warning_Legalinformation_47_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WarningLegalinformation47LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'WarningLegalinformation47LineIcon';

const WarningLegalinformation47LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default WarningLegalinformation47LineIcon;
