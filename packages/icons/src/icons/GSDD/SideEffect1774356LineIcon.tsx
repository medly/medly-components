import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1774356LineIconSvg from '../../assets/GSDD/SideEffect_1774_356_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1774356LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1774356LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1774356LineIcon.Style = SvgIcon;
SideEffect1774356LineIcon.displayName = 'SideEffect1774356LineIcon';

export default SideEffect1774356LineIcon
