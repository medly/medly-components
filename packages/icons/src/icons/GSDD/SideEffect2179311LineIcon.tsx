import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect2179311LineIconSvg from '../../assets/GSDD/SideEffect_2179_311_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect2179311LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect2179311LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect2179311LineIcon.Style = SvgIcon;
SideEffect2179311LineIcon.displayName = 'SideEffect2179311LineIcon';

export default SideEffect2179311LineIcon
