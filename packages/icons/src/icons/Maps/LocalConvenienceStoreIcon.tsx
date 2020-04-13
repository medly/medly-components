import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import LocalConvenienceStoreIconSvg from '../../assets/Maps/local_convenience_store_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const LocalConvenienceStoreIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <LocalConvenienceStoreIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

LocalConvenienceStoreIcon.Style = SvgIcon;
LocalConvenienceStoreIcon.displayName = 'LocalConvenienceStoreIcon';

export default LocalConvenienceStoreIcon
