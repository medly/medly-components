import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonAddDisabledIconSvg from '../../assets/Communication/person_add_disabled_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonAddDisabledIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonAddDisabledIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonAddDisabledIcon.Style = SvgIcon;
PersonAddDisabledIcon.displayName = 'PersonAddDisabledIcon';

export default PersonAddDisabledIcon
