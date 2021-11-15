import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect322567LineIconSvg from '../../assets/GSDD/SideEffect_3225_67_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect322567LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect322567LineIcon';

const SideEffect322567LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect322567LineIcon;
