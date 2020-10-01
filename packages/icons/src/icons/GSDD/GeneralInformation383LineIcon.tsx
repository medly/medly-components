import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation383LineIconSvg from '../../assets/GSDD/GeneralInformation_383_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation383LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation383LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation383LineIcon.Style = SvgIcon;
GeneralInformation383LineIcon.displayName = 'GeneralInformation383LineIcon';

export default GeneralInformation383LineIcon
