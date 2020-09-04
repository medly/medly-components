import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning60LineIconSvg from '../../assets/GSDD/Warning_60_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning60LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning60LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning60LineIcon.Style = SvgIcon;
Warning60LineIcon.displayName = 'Warning60LineIcon';

export default Warning60LineIcon
