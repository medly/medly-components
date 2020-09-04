import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning286LineIconSvg from '../../assets/GSDD/Warning_286_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning286LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning286LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning286LineIcon.Style = SvgIcon;
Warning286LineIcon.displayName = 'Warning286LineIcon';

export default Warning286LineIcon
