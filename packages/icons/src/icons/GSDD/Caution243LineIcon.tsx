import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Caution243LineIconSvg from '../../assets/GSDD/Caution_243_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Caution243LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Caution243LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Caution243LineIcon.Style = SvgIcon;
Caution243LineIcon.displayName = 'Caution243LineIcon';

export default Caution243LineIcon
