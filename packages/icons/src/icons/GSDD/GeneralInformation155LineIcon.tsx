import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation155LineIconSvg from '../../assets/GSDD/GeneralInformation_155_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation155LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation155LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation155LineIcon.Style = SvgIcon;
GeneralInformation155LineIcon.displayName = 'GeneralInformation155LineIcon';

export default GeneralInformation155LineIcon
