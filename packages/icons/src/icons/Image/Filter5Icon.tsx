import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter5IconSvg from '../../assets/Image/filter_5_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter5Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter5IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter5Icon.Style = SvgIcon;
Filter5Icon.displayName = 'Filter5Icon';

export default Filter5Icon
