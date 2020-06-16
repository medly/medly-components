import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import WrapTextIconSvg from '../../assets/Editor/wrap_text_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WrapTextIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WrapTextIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WrapTextIcon.Style = SvgIcon;
WrapTextIcon.displayName = 'WrapTextIcon';

export default WrapTextIcon
