import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution293LineIconSvg from '../../assets/GSDD/Caution_293_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution293LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution293LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution293LineIcon.Style = SvgIcon;
Caution293LineIcon.displayName = 'Caution293LineIcon';

export default Caution293LineIcon
