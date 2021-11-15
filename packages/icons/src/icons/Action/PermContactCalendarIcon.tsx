import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import PermContactCalendarIconSvg from '../../assets/Action/perm_contact_calendar_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PermContactCalendarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'PermContactCalendarIcon';

const PermContactCalendarIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default PermContactCalendarIcon;
