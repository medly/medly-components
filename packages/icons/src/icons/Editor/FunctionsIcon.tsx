import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FunctionsIconSvg from '../../assets/Editor/functions_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FunctionsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FunctionsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FunctionsIcon.Style = SvgIcon;
FunctionsIcon.displayName = 'FunctionsIcon';

export default FunctionsIcon
