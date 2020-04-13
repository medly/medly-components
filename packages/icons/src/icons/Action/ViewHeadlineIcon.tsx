import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ViewHeadlineIconSvg from '../../assets/Action/view_headline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ViewHeadlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ViewHeadlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ViewHeadlineIcon.Style = SvgIcon;
ViewHeadlineIcon.displayName = 'ViewHeadlineIcon';

export default ViewHeadlineIcon
