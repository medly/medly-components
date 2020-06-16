import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LinearScaleIconSvg from '../../assets/Editor/linear_scale_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LinearScaleIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LinearScaleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LinearScaleIcon.Style = SvgIcon;
LinearScaleIcon.displayName = 'LinearScaleIcon';

export default LinearScaleIcon
