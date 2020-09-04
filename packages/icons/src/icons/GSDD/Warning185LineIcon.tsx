import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning185LineIconSvg from '../../assets/GSDD/Warning_185_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning185LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning185LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning185LineIcon.Style = SvgIcon;
Warning185LineIcon.displayName = 'Warning185LineIcon';

export default Warning185LineIcon
