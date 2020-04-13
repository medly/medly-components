import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ShuffleIconSvg from '../../assets/Media/shuffle_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ShuffleIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ShuffleIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ShuffleIcon.Style = SvgIcon;
ShuffleIcon.displayName = 'ShuffleIcon';

export default ShuffleIcon
