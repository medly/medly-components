import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import Dietary21LineIconSvg from '../../assets/GSDD/Dietary_21_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Dietary21LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <Dietary21LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

Dietary21LineIcon.Style = SvgIcon;
Dietary21LineIcon.displayName = 'Dietary21LineIcon';

export default Dietary21LineIcon
