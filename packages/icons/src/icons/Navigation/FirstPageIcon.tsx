import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FirstPageIconSvg from '../../assets/Navigation/first_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FirstPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FirstPageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FirstPageIcon.Style = SvgIcon;
FirstPageIcon.displayName = 'FirstPageIcon';

export default FirstPageIcon
