import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ChevronRightIconSvg from '../../assets/Navigation/chevron_right_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ChevronRightIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ChevronRightIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ChevronRightIcon.Style = SvgIcon;
ChevronRightIcon.displayName = 'ChevronRightIcon';

export default ChevronRightIcon
