import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PresentToAllIconSvg from '../../assets/Communication/present_to_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PresentToAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PresentToAllIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PresentToAllIcon.Style = SvgIcon;
PresentToAllIcon.displayName = 'PresentToAllIcon';

export default PresentToAllIcon
