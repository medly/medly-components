import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import FindInPageIconSvg from '../../assets/Action/find_in_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FindInPageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FindInPageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FindInPageIcon.Style = SvgIcon;
FindInPageIcon.displayName = 'FindInPageIcon';

export default FindInPageIcon
