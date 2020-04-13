import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import CancelPresentationIconSvg from '../../assets/Communication/cancel_presentation_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CancelPresentationIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CancelPresentationIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CancelPresentationIcon.Style = SvgIcon;
CancelPresentationIcon.displayName = 'CancelPresentationIcon';

export default CancelPresentationIcon
