import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import StyleIconSvg from '../../assets/Image/style_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StyleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StyleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StyleIcon.Style = SvgIcon;
StyleIcon.displayName = 'StyleIcon';

export default StyleIcon
