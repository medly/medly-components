import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning345LineIconSvg from '../../assets/GSDD/Warning_345_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning345LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning345LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning345LineIcon.Style = SvgIcon;
Warning345LineIcon.displayName = 'Warning345LineIcon';

export default Warning345LineIcon
