import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import ChevronDownIconSvg from '../../assets/Custom/chevron_down_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChevronDownIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChevronDownIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChevronDownIcon.Style = SvgIcon;
ChevronDownIcon.displayName = 'ChevronDownIcon';

export default ChevronDownIcon
