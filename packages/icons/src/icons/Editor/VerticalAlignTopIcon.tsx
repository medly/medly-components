import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import VerticalAlignTopIconSvg from '../../assets/Editor/vertical_align_top_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <VerticalAlignTopIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'VerticalAlignTopIcon';

const VerticalAlignTopIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default VerticalAlignTopIcon
