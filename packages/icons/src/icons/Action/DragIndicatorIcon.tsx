import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DragIndicatorIconSvg from '../../assets/Action/drag_indicator_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DragIndicatorIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DragIndicatorIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DragIndicatorIcon.Style = SvgIcon;
DragIndicatorIcon.displayName = 'DragIndicatorIcon';

export default DragIndicatorIcon
