import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import RateReviewIconSvg from '../../assets/Maps/rate_review_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const RateReviewIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <RateReviewIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

RateReviewIcon.Style = SvgIcon;
RateReviewIcon.displayName = 'RateReviewIcon';

export default RateReviewIcon
