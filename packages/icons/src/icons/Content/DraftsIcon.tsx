import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import DraftsIconSvg from '../../assets/Content/drafts_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const DraftsIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <DraftsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

DraftsIcon.Style = SvgIcon;
DraftsIcon.displayName = 'DraftsIcon';

export default DraftsIcon
