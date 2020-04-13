import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SmokeFreeIconSvg from '../../assets/Places/smoke_free_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SmokeFreeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SmokeFreeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SmokeFreeIcon.Style = SvgIcon;
SmokeFreeIcon.displayName = 'SmokeFreeIcon';

export default SmokeFreeIcon
