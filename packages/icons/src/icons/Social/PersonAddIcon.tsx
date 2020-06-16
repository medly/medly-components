import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PersonAddIconSvg from '../../assets/Social/person_add_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PersonAddIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PersonAddIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PersonAddIcon.Style = SvgIcon;
PersonAddIcon.displayName = 'PersonAddIcon';

export default PersonAddIcon
