import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UnarchiveIconSvg from '../../assets/Content/unarchive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UnarchiveIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UnarchiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UnarchiveIcon.Style = SvgIcon;
UnarchiveIcon.displayName = 'UnarchiveIcon';

export default UnarchiveIcon
