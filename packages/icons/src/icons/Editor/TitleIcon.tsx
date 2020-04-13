import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TitleIconSvg from '../../assets/Editor/title_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TitleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TitleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TitleIcon.Style = SvgIcon;
TitleIcon.displayName = 'TitleIcon';

export default TitleIcon
