import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalMoviesIconSvg from '../../assets/Maps/local_movies_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalMoviesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <LocalMoviesIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

LocalMoviesIcon.Style = SvgIcon;
LocalMoviesIcon.displayName = 'LocalMoviesIcon';

export default LocalMoviesIcon
