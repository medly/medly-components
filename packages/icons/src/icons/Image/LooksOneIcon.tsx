import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LooksOneIconSvg from '../../assets/Image/looks_one_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LooksOneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LooksOneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LooksOneIcon.Style = SvgIcon;
LooksOneIcon.displayName = 'LooksOneIcon';

export default LooksOneIcon
