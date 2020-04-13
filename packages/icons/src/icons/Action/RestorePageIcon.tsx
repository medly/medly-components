import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RestorePageIconSvg from '../../assets/Action/restore_page_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RestorePageIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RestorePageIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RestorePageIcon.Style = SvgIcon;
RestorePageIcon.displayName = 'RestorePageIcon';

export default RestorePageIcon
