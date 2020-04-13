import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import AllInclusiveIconSvg from '../../assets/Places/all_inclusive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AllInclusiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AllInclusiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AllInclusiveIcon.Style = SvgIcon;
AllInclusiveIcon.displayName = 'AllInclusiveIcon';

export default AllInclusiveIcon
