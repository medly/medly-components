import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PeopleOutlineIconSvg from '../../assets/Social/people_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PeopleOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PeopleOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PeopleOutlineIcon.Style = SvgIcon;
PeopleOutlineIcon.displayName = 'PeopleOutlineIcon';

export default PeopleOutlineIcon
