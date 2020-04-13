import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import NewReleasesIconSvg from '../../assets/Media/new_releases_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const NewReleasesIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <NewReleasesIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

NewReleasesIcon.Style = SvgIcon;
NewReleasesIcon.displayName = 'NewReleasesIcon';

export default NewReleasesIcon
