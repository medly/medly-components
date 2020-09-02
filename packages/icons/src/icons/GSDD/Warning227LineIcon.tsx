import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning227LineIconSvg from '../../assets/GSDD/Warning_227_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning227LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning227LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning227LineIcon.Style = SvgIcon;
Warning227LineIcon.displayName = 'Warning227LineIcon';

export default Warning227LineIcon
