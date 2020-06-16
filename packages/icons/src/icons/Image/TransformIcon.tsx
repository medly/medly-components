import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TransformIconSvg from '../../assets/Image/transform_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TransformIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TransformIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TransformIcon.Style = SvgIcon;
TransformIcon.displayName = 'TransformIcon';

export default TransformIcon
