import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MovieCreationIconSvg from '../../assets/Image/movie_creation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MovieCreationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MovieCreationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MovieCreationIcon.Style = SvgIcon;
MovieCreationIcon.displayName = 'MovieCreationIcon';

export default MovieCreationIcon
