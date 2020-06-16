import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import StarIconSvg from '../../assets/Toggle/star_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const StarIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <StarIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

StarIcon.Style = SvgIcon;
StarIcon.displayName = 'StarIcon';

export default StarIcon
