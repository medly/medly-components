import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LooksTwoIconSvg from '../../assets/Image/looks_two_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LooksTwoIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LooksTwoIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LooksTwoIcon.Style = SvgIcon;
LooksTwoIcon.displayName = 'LooksTwoIcon';

export default LooksTwoIcon
