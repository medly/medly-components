import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect15222LineIconSvg from '../../assets/GSDD/SideEffect_15_222_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect15222LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect15222LineIcon';

const SideEffect15222LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect15222LineIcon;
