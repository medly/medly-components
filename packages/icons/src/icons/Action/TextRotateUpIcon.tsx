import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TextRotateUpIconSvg from '../../assets/Action/text_rotate_up_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotateUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextRotateUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextRotateUpIcon.Style = SvgIcon;
TextRotateUpIcon.displayName = 'TextRotateUpIcon';

export default TextRotateUpIcon
