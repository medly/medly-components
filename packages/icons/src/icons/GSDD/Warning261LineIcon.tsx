import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning261LineIconSvg from '../../assets/GSDD/Warning_261_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning261LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning261LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning261LineIcon.Style = SvgIcon;
Warning261LineIcon.displayName = 'Warning261LineIcon';

export default Warning261LineIcon
