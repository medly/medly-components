import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewCompactIconSvg from '../../assets/Image/view_compact_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewCompactIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewCompactIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewCompactIcon.Style = SvgIcon;
ViewCompactIcon.displayName = 'ViewCompactIcon';

export default ViewCompactIcon
