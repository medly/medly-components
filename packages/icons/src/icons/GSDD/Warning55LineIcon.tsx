import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning55LineIconSvg from '../../assets/GSDD/Warning_55_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning55LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning55LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning55LineIcon.Style = SvgIcon;
Warning55LineIcon.displayName = 'Warning55LineIcon';

export default Warning55LineIcon
