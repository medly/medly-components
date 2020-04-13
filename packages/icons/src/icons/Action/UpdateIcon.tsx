import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import UpdateIconSvg from '../../assets/Action/update_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const UpdateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <UpdateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

UpdateIcon.Style = SvgIcon;
UpdateIcon.displayName = 'UpdateIcon';

export default UpdateIcon
