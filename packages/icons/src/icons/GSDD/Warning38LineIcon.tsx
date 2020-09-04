import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning38LineIconSvg from '../../assets/GSDD/Warning_38_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning38LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning38LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning38LineIcon.Style = SvgIcon;
Warning38LineIcon.displayName = 'Warning38LineIcon';

export default Warning38LineIcon
