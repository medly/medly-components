import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning192LineIconSvg from '../../assets/GSDD/Warning_192_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning192LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning192LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning192LineIcon.Style = SvgIcon;
Warning192LineIcon.displayName = 'Warning192LineIcon';

export default Warning192LineIcon
