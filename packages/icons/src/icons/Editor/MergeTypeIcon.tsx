import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import MergeTypeIconSvg from '../../assets/Editor/merge_type_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MergeTypeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <MergeTypeIconSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

MergeTypeIcon.Style = SvgIcon;
MergeTypeIcon.displayName = 'MergeTypeIcon';

export default MergeTypeIcon
