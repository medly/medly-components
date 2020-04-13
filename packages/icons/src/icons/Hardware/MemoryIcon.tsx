import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MemoryIconSvg from '../../assets/Hardware/memory_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MemoryIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MemoryIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MemoryIcon.Style = SvgIcon;
MemoryIcon.displayName = 'MemoryIcon';

export default MemoryIcon
