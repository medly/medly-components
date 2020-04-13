import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InputIconSvg from '../../assets/Action/input_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InputIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InputIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InputIcon.Style = SvgIcon;
InputIcon.displayName = 'InputIcon';

export default InputIcon
