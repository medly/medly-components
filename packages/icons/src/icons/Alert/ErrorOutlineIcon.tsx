import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ErrorOutlineIconSvg from '../../assets/Alert/error_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ErrorOutlineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ErrorOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ErrorOutlineIcon.Style = SvgIcon;
ErrorOutlineIcon.displayName = 'ErrorOutlineIcon';

export default ErrorOutlineIcon
