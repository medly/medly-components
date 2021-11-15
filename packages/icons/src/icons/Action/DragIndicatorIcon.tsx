import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import DragIndicatorIconSvg from '../../assets/Action/drag_indicator_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DragIndicatorIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'DragIndicatorIcon';

const DragIndicatorIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default DragIndicatorIcon;
