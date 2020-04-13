import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import OpenInNewIconSvg from '../../assets/Action/open_in_new_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const OpenInNewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <OpenInNewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

OpenInNewIcon.Style = SvgIcon;
OpenInNewIcon.displayName = 'OpenInNewIcon';

export default OpenInNewIcon
