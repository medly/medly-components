import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning400LineIconSvg from '../../assets/GSDD/Warning_400_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning400LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning400LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning400LineIcon.Style = SvgIcon;
Warning400LineIcon.displayName = 'Warning400LineIcon';

export default Warning400LineIcon
