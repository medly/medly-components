import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MoneyOffCsredIconSvg from '../../assets/Editor/money_off_csred_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyOffCsredIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoneyOffCsredIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoneyOffCsredIcon.Style = SvgIcon;
MoneyOffCsredIcon.displayName = 'MoneyOffCsredIcon';

export default MoneyOffCsredIcon
