import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalPostOfficeIconSvg from '../../assets/Maps/local_post_office_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPostOfficeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalPostOfficeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalPostOfficeIcon.Style = SvgIcon;
LocalPostOfficeIcon.displayName = 'LocalPostOfficeIcon';

export default LocalPostOfficeIcon
