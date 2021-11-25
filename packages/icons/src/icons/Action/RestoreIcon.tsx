import { WithStyle } from '@medly-components/utils';
import type { FC } from 'react';
import { memo } from 'react';
import RestoreIconSvg from '../../assets/Action/restore_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestoreIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'RestoreIcon';

const RestoreIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default RestoreIcon;
