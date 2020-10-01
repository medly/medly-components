import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning326LineIconSvg from '../../assets/GSDD/Warning_326_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning326LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning326LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning326LineIcon.Style = SvgIcon;
Warning326LineIcon.displayName = 'Warning326LineIcon';

export default Warning326LineIcon
