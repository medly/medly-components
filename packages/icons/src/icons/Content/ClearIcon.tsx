import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ClearIconSvg from '../../assets/Content/clear_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ClearIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ClearIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ClearIcon.Style = SvgIcon;
ClearIcon.displayName = 'ClearIcon';

export default ClearIcon
