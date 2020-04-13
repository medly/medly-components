import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FindReplaceIconSvg from '../../assets/Action/find_replace_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FindReplaceIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FindReplaceIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FindReplaceIcon.Style = SvgIcon;
FindReplaceIcon.displayName = 'FindReplaceIcon';

export default FindReplaceIcon
