import { WithStyle } from '@medly-components/utils';
import { memo, FC } from 'react';
import FiberManualRecordIconSvg from '../../assets/Media/fiber_manual_record_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FiberManualRecordIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FiberManualRecordIcon';

const FiberManualRecordIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon });

export default FiberManualRecordIcon;
