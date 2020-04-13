import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MovieFilterIconSvg from '../../assets/Image/movie_filter_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MovieFilterIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MovieFilterIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MovieFilterIcon.Style = SvgIcon;
MovieFilterIcon.displayName = 'MovieFilterIcon';

export default MovieFilterIcon
