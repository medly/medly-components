import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SortByAlphaIconSvg from '../../assets/Media/sort_by_alpha_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SortByAlphaIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SortByAlphaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SortByAlphaIcon.Style = SvgIcon;
SortByAlphaIcon.displayName = 'SortByAlphaIcon';

export default SortByAlphaIcon
