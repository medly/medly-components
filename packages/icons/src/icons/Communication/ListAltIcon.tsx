import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ListAltIconSvg from '../../assets/Communication/list_alt_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ListAltIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ListAltIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ListAltIcon.Style = SvgIcon;
ListAltIcon.displayName = 'ListAltIcon';

export default ListAltIcon
