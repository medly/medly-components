import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CachedIconSvg from '../../assets/Action/cached_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CachedIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CachedIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CachedIcon.Style = SvgIcon;
CachedIcon.displayName = 'CachedIcon';

export default CachedIcon
