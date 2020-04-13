import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MoneyIconSvg from '../../assets/Maps/money_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MoneyIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MoneyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MoneyIcon.Style = SvgIcon;
MoneyIcon.displayName = 'MoneyIcon';

export default MoneyIcon
