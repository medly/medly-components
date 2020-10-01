import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect175041LineIconSvg from '../../assets/GSDD/SideEffect_1750_41_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect175041LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect175041LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect175041LineIcon.Style = SvgIcon;
SideEffect175041LineIcon.displayName = 'SideEffect175041LineIcon';

export default SideEffect175041LineIcon
