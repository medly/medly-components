import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AlternateEmailIconSvg from '../../assets/Communication/alternate_email_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AlternateEmailIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AlternateEmailIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AlternateEmailIcon.Style = SvgIcon;
AlternateEmailIcon.displayName = 'AlternateEmailIcon';

export default AlternateEmailIcon
