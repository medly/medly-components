import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChangeHistoryIconSvg from '../../assets/Action/change_history_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChangeHistoryIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChangeHistoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChangeHistoryIcon.Style = SvgIcon;
ChangeHistoryIcon.displayName = 'ChangeHistoryIcon';

export default ChangeHistoryIcon
