import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary378LineIconSvg from '../../assets/GSDD/Dietary_378_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary378LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary378LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary378LineIcon.Style = SvgIcon;
Dietary378LineIcon.displayName = 'Dietary378LineIcon';

export default Dietary378LineIcon
