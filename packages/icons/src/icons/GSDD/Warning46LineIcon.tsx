import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning46LineIconSvg from '../../assets/GSDD/Warning_46_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning46LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning46LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning46LineIcon.Style = SvgIcon;
Warning46LineIcon.displayName = 'Warning46LineIcon';

export default Warning46LineIcon
