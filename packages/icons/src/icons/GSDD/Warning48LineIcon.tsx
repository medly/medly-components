import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning48LineIconSvg from '../../assets/GSDD/Warning_48_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning48LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning48LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning48LineIcon.Style = SvgIcon;
Warning48LineIcon.displayName = 'Warning48LineIcon';

export default Warning48LineIcon
