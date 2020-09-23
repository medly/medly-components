import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1504215LineIconSvg from '../../assets/GSDD/SideEffect_1504_215_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1504215LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1504215LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1504215LineIcon.Style = SvgIcon;
SideEffect1504215LineIcon.displayName = 'SideEffect1504215LineIcon';

export default SideEffect1504215LineIcon
