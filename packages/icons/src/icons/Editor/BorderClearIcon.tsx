import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import BorderClearIconSvg from '../../assets/Editor/border_clear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const BorderClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <BorderClearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

BorderClearIcon.Style = SvgIcon;
BorderClearIcon.displayName = 'BorderClearIcon';

export default BorderClearIcon
