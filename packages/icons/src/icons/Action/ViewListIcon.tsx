import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewListIconSvg from '../../assets/Action/view_list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewListIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewListIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewListIcon.Style = SvgIcon;
ViewListIcon.displayName = 'ViewListIcon';

export default ViewListIcon
