import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GamesIconSvg from '../../assets/Media/games_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GamesIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GamesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GamesIcon.Style = SvgIcon;
GamesIcon.displayName = 'GamesIcon';

export default GamesIcon
