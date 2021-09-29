import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatAlignCenterIconSvg from '../../assets/Editor/format_align_center_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Component: FC<SvgIconProps> = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatAlignCenterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});
Component.displayName = 'FormatAlignCenterIcon';

const FormatAlignCenterIcon: FC<SvgIconProps> & WithStyle = Object.assign(Component, { Style: SvgIcon })

export default FormatAlignCenterIcon
