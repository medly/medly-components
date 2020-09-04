import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning246LineIconSvg from '../../assets/GSDD/Warning_246_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning246LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning246LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning246LineIcon.Style = SvgIcon;
Warning246LineIcon.displayName = 'Warning246LineIcon';

export default Warning246LineIcon
