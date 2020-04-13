import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import WhereToVoteIconSvg from '../../assets/Content/where_to_vote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const WhereToVoteIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <WhereToVoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

WhereToVoteIcon.Style = SvgIcon;
WhereToVoteIcon.displayName = 'WhereToVoteIcon';

export default WhereToVoteIcon
