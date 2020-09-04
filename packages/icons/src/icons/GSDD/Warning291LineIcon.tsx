import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning291LineIconSvg from '../../assets/GSDD/Warning_291_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning291LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning291LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning291LineIcon.Style = SvgIcon;
Warning291LineIcon.displayName = 'Warning291LineIcon';

export default Warning291LineIcon
