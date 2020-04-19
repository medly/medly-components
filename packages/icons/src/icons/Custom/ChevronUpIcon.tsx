import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChevronUpIconSvg from '../../assets/Custom/chevron_up_24px.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChevronUpIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChevronUpIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChevronUpIcon.Style = SvgIcon;
ChevronUpIcon.displayName = 'ChevronUpIcon';

export default ChevronUpIcon
