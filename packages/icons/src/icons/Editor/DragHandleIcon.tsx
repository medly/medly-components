import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import DragHandleIconSvg from '../../assets/Editor/drag_handle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DragHandleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DragHandleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DragHandleIcon.Style = SvgIcon;
DragHandleIcon.displayName = 'DragHandleIcon';

export default DragHandleIcon
