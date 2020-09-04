import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution292LineIconSvg from '../../assets/GSDD/Caution_292_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution292LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution292LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution292LineIcon.Style = SvgIcon;
Caution292LineIcon.displayName = 'Caution292LineIcon';

export default Caution292LineIcon
