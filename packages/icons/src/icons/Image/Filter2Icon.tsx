import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import Filter2IconSvg from '../../assets/Image/filter_2_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const Filter2Icon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <Filter2IconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

Filter2Icon.Style = SvgIcon;
Filter2Icon.displayName = 'Filter2Icon';

export default Filter2Icon
