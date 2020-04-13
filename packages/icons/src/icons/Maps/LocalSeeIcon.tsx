import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalSeeIconSvg from '../../assets/Maps/local_see_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalSeeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalSeeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalSeeIcon.Style = SvgIcon;
LocalSeeIcon.displayName = 'LocalSeeIcon';

export default LocalSeeIcon
