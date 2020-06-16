import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ClearAllIconSvg from '../../assets/Communication/clear_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClearAllIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ClearAllIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ClearAllIcon.Style = SvgIcon;
ClearAllIcon.displayName = 'ClearAllIcon';

export default ClearAllIcon
