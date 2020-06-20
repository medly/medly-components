import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HighlightIconSvg from '../../assets/Editor/highlight_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HighlightIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HighlightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HighlightIcon.Style = SvgIcon;
HighlightIcon.displayName = 'HighlightIcon';

export default HighlightIcon
