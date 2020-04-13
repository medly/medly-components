import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InsertLinkIconSvg from '../../assets/Editor/insert_link_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InsertLinkIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InsertLinkIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InsertLinkIcon.Style = SvgIcon;
InsertLinkIcon.displayName = 'InsertLinkIcon';

export default InsertLinkIcon
