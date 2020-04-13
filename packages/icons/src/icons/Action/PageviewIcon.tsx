import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PageviewIconSvg from '../../assets/Action/pageview_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PageviewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PageviewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PageviewIcon.Style = SvgIcon;
PageviewIcon.displayName = 'PageviewIcon';

export default PageviewIcon
