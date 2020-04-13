import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoneyOffIconSvg from '../../assets/Editor/money_off_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyOffIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoneyOffIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoneyOffIcon.Style = SvgIcon;
MoneyOffIcon.displayName = 'MoneyOffIcon';

export default MoneyOffIcon
