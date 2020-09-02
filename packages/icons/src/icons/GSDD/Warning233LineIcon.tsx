import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning233LineIconSvg from '../../assets/GSDD/Warning_233_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning233LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning233LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning233LineIcon.Style = SvgIcon;
Warning233LineIcon.displayName = 'Warning233LineIcon';

export default Warning233LineIcon
