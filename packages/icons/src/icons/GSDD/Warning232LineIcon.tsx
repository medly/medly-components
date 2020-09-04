import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning232LineIconSvg from '../../assets/GSDD/Warning_232_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning232LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning232LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning232LineIcon.Style = SvgIcon;
Warning232LineIcon.displayName = 'Warning232LineIcon';

export default Warning232LineIcon
