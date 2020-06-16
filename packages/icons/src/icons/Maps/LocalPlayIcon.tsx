import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import LocalPlayIconSvg from '../../assets/Maps/local_play_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalPlayIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalPlayIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalPlayIcon.Style = SvgIcon;
LocalPlayIcon.displayName = 'LocalPlayIcon';

export default LocalPlayIcon
