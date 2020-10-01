import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning196LineIconSvg from '../../assets/GSDD/Warning_196_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning196LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning196LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning196LineIcon.Style = SvgIcon;
Warning196LineIcon.displayName = 'Warning196LineIcon';

export default Warning196LineIcon
