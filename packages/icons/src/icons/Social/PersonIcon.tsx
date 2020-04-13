import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonIconSvg from '../../assets/Social/person_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonIcon.Style = SvgIcon;
PersonIcon.displayName = 'PersonIcon';

export default PersonIcon
