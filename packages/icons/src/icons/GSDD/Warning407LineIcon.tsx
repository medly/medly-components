import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning407LineIconSvg from '../../assets/GSDD/Warning_407_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning407LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning407LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning407LineIcon.Style = SvgIcon;
Warning407LineIcon.displayName = 'Warning407LineIcon';

export default Warning407LineIcon
