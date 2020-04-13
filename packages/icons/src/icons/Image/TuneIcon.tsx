import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import TuneIconSvg from '../../assets/Image/tune_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const TuneIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <TuneIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

TuneIcon.Style = SvgIcon;
TuneIcon.displayName = 'TuneIcon';

export default TuneIcon
