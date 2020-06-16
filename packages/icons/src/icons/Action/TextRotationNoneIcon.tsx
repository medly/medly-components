import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextRotationNoneIconSvg from '../../assets/Action/text_rotation_none_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextRotationNoneIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextRotationNoneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextRotationNoneIcon.Style = SvgIcon;
TextRotationNoneIcon.displayName = 'TextRotationNoneIcon';

export default TextRotationNoneIcon
