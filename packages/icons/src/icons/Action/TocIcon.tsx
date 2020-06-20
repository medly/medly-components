import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import TocIconSvg from '../../assets/Action/toc_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TocIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TocIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TocIcon.Style = SvgIcon;
TocIcon.displayName = 'TocIcon';

export default TocIcon
