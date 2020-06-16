import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AttachMoneyIconSvg from '../../assets/Editor/attach_money_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AttachMoneyIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AttachMoneyIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AttachMoneyIcon.Style = SvgIcon;
AttachMoneyIcon.displayName = 'AttachMoneyIcon';

export default AttachMoneyIcon
