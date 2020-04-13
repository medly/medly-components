import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalMoviesIconSvg from '../../assets/Maps/local_movies_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalMoviesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalMoviesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalMoviesIcon.Style = SvgIcon;
LocalMoviesIcon.displayName = 'LocalMoviesIcon';

export default LocalMoviesIcon
