import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import OutlinedFlagIconSvg from '../../assets/Content/outlined_flag_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OutlinedFlagIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'OutlinedFlagIcon';

const OutlinedFlagIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default OutlinedFlagIcon;
