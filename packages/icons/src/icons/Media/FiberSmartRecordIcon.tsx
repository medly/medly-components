import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import FiberSmartRecordIconSvg from '../../assets/Media/fiber_smart_record_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FiberSmartRecordIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FiberSmartRecordIcon';

const FiberSmartRecordIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FiberSmartRecordIcon;
