import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BeachAccessIconSvg from '../../assets/Places/beach_access_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BeachAccessIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BeachAccessIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BeachAccessIcon.Style = SvgIcon;
BeachAccessIcon.displayName = 'BeachAccessIcon';

export default BeachAccessIcon
