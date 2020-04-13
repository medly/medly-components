import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SelectAllIconSvg from '../../assets/Content/select_all_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SelectAllIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <SelectAllIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

SelectAllIcon.Style = SvgIcon;
SelectAllIcon.displayName = 'SelectAllIcon';

export default SelectAllIcon
