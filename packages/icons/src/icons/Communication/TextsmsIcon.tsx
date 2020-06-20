import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextsmsIconSvg from '../../assets/Communication/textsms_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextsmsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextsmsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextsmsIcon.Style = SvgIcon;
TextsmsIcon.displayName = 'TextsmsIcon';

export default TextsmsIcon
