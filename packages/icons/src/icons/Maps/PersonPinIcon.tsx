import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PersonPinIconSvg from '../../assets/Maps/person_pin_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonPinIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonPinIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonPinIcon.Style = SvgIcon;
PersonPinIcon.displayName = 'PersonPinIcon';

export default PersonPinIcon
