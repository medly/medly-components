import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AdjustIconSvg from '../../assets/Image/adjust_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AdjustIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AdjustIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AdjustIcon.Style = SvgIcon;
AdjustIcon.displayName = 'AdjustIcon';

export default AdjustIcon
