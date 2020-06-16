import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CalculatorIconSvg from '../../assets/Custom/calculator_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CalculatorIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CalculatorIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CalculatorIcon.Style = SvgIcon;
CalculatorIcon.displayName = 'CalculatorIcon';

export default CalculatorIcon
