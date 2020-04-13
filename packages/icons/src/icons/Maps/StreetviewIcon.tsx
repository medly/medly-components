import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StreetviewIconSvg from '../../assets/Maps/streetview_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StreetviewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StreetviewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StreetviewIcon.Style = SvgIcon;
StreetviewIcon.displayName = 'StreetviewIcon';

export default StreetviewIcon
