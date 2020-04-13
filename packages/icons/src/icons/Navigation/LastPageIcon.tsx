import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LastPageIconSvg from '../../assets/Navigation/last_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LastPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LastPageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LastPageIcon.Style = SvgIcon;
LastPageIcon.displayName = 'LastPageIcon';

export default LastPageIcon
