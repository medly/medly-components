import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PersonPinCircleIconSvg from '../../assets/Maps/person_pin_circle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonPinCircleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonPinCircleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonPinCircleIcon.Style = SvgIcon;
PersonPinCircleIcon.displayName = 'PersonPinCircleIcon';

export default PersonPinCircleIcon
