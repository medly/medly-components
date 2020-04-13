import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ListIconSvg from '../../assets/Action/list_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ListIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <ListIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

ListIcon.Style = SvgIcon;
ListIcon.displayName = 'ListIcon';

export default ListIcon
