import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Warning40LineIconSvg from '../../assets/GSDD/Warning_40_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Warning40LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Warning40LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Warning40LineIcon.Style = SvgIcon;
Warning40LineIcon.displayName = 'Warning40LineIcon';

export default Warning40LineIcon
