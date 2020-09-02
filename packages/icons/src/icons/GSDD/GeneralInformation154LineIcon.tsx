import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation154LineIconSvg from '../../assets/GSDD/GeneralInformation_154_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation154LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation154LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation154LineIcon.Style = SvgIcon;
GeneralInformation154LineIcon.displayName = 'GeneralInformation154LineIcon';

export default GeneralInformation154LineIcon
