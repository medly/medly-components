import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ArchiveIconSvg from '../../assets/Content/archive_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ArchiveIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ArchiveIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ArchiveIcon.Style = SvgIcon;
ArchiveIcon.displayName = 'ArchiveIcon';

export default ArchiveIcon
