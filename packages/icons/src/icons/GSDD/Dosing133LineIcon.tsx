import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dosing133LineIconSvg from '../../assets/GSDD/Dosing_133_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dosing133LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dosing133LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dosing133LineIcon.Style = SvgIcon;
Dosing133LineIcon.displayName = 'Dosing133LineIcon';

export default Dosing133LineIcon
