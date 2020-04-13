import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TranslateIconSvg from '../../assets/Action/translate_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TranslateIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TranslateIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TranslateIcon.Style = SvgIcon;
TranslateIcon.displayName = 'TranslateIcon';

export default TranslateIcon
