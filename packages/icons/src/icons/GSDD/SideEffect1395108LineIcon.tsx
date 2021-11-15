import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect1395108LineIconSvg from '../../assets/GSDD/SideEffect_1395_108_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1395108LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect1395108LineIcon';

const SideEffect1395108LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect1395108LineIcon;
