import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import RvHookupIconSvg from '../../assets/Places/rv_hookup_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RvHookupIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RvHookupIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RvHookupIcon.Style = SvgIcon;
RvHookupIcon.displayName = 'RvHookupIcon';

export default RvHookupIcon
