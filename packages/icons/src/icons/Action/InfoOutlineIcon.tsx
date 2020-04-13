import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import InfoOutlineIconSvg from '../../assets/Action/info_outline_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const InfoOutlineIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <InfoOutlineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

InfoOutlineIcon.Style = SvgIcon;
InfoOutlineIcon.displayName = 'InfoOutlineIcon';

export default InfoOutlineIcon
