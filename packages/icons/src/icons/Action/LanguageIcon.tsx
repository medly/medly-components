import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LanguageIconSvg from '../../assets/Action/language_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LanguageIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LanguageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LanguageIcon.Style = SvgIcon;
LanguageIcon.displayName = 'LanguageIcon';

export default LanguageIcon
