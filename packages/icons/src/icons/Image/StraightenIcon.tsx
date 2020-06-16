import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StraightenIconSvg from '../../assets/Image/straighten_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StraightenIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StraightenIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StraightenIcon.Style = SvgIcon;
StraightenIcon.displayName = 'StraightenIcon';

export default StraightenIcon
