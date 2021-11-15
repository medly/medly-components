import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect318717LineIconSvg from '../../assets/GSDD/SideEffect_3187_17_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect318717LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect318717LineIcon';

const SideEffect318717LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect318717LineIcon;
