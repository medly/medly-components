import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShortTextIconSvg from '../../assets/Editor/short_text_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShortTextIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShortTextIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShortTextIcon.Style = SvgIcon;
ShortTextIcon.displayName = 'ShortTextIcon';

export default ShortTextIcon
