import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AllOutIconSvg from '../../assets/Action/all_out_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AllOutIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AllOutIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AllOutIcon.Style = SvgIcon;
AllOutIcon.displayName = 'AllOutIcon';

export default AllOutIcon
