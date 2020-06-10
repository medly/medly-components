import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import PillIconSvg from '../../assets/Custom/pill_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PillIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PillIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PillIcon.Style = SvgIcon;
PillIcon.displayName = 'PillIcon';

export default PillIcon
