import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning51LineIconSvg from '../../assets/GSDD/Warning_51_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning51LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning51LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning51LineIcon.Style = SvgIcon;
Warning51LineIcon.displayName = 'Warning51LineIcon';

export default Warning51LineIcon
