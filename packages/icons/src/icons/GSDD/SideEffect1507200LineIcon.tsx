import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import SideEffect1507200LineIconSvg from '../../assets/GSDD/SideEffect_1507_200_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1507200LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'SideEffect1507200LineIcon';

const SideEffect1507200LineIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default SideEffect1507200LineIcon;
