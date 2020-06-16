import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FormatAlignRightIconSvg from '../../assets/Editor/format_align_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FormatAlignRightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FormatAlignRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FormatAlignRightIcon.Style = SvgIcon;
FormatAlignRightIcon.displayName = 'FormatAlignRightIcon';

export default FormatAlignRightIcon
