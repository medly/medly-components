import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import ChangeHistoryIconSvg from '../../assets/Action/change_history_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChangeHistoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'ChangeHistoryIcon';

const ChangeHistoryIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default ChangeHistoryIcon;
