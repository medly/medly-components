import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TextFieldsIconSvg from '../../assets/Editor/text_fields_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TextFieldsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TextFieldsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TextFieldsIcon.Style = SvgIcon;
TextFieldsIcon.displayName = 'TextFieldsIcon';

export default TextFieldsIcon
