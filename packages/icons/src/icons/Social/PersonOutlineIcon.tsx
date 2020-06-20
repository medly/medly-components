import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PersonOutlineIconSvg from '../../assets/Social/person_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonOutlineIcon.Style = SvgIcon;
PersonOutlineIcon.displayName = 'PersonOutlineIcon';

export default PersonOutlineIcon
