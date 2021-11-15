import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect529416LineIconSvg from '../../assets/GSDD/SideEffect_529_416_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect529416LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect529416LineIcon';

const SideEffect529416LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect529416LineIcon;
