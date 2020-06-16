import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CompareArrowsIconSvg from '../../assets/Action/compare_arrows_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CompareArrowsIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CompareArrowsIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CompareArrowsIcon.Style = SvgIcon;
CompareArrowsIcon.displayName = 'CompareArrowsIcon';

export default CompareArrowsIcon
