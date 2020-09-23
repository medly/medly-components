import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1791269LineIconSvg from '../../assets/GSDD/SideEffect_1791_269_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1791269LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1791269LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1791269LineIcon.Style = SvgIcon;
SideEffect1791269LineIcon.displayName = 'SideEffect1791269LineIcon';

export default SideEffect1791269LineIcon
