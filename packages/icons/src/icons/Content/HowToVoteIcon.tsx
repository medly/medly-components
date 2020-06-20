import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import HowToVoteIconSvg from '../../assets/Content/how_to_vote_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const HowToVoteIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <HowToVoteIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

HowToVoteIcon.Style = SvgIcon;
HowToVoteIcon.displayName = 'HowToVoteIcon';

export default HowToVoteIcon
