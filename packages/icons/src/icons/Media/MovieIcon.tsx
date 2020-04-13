import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MovieIconSvg from '../../assets/Media/movie_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MovieIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MovieIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MovieIcon.Style = SvgIcon;
MovieIcon.displayName = 'MovieIcon';

export default MovieIcon
