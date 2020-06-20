import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import PagesIconSvg from '../../assets/Social/pages_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const PagesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <PagesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

PagesIcon.Style = SvgIcon;
PagesIcon.displayName = 'PagesIcon';

export default PagesIcon
