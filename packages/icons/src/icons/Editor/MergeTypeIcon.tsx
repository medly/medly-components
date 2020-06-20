import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import MergeTypeIconSvg from '../../assets/Editor/merge_type_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const MergeTypeIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <MergeTypeIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

MergeTypeIcon.Style = SvgIcon;
MergeTypeIcon.displayName = 'MergeTypeIcon';

export default MergeTypeIcon
