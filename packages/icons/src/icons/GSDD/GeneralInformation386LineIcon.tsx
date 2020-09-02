import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation386LineIconSvg from '../../assets/GSDD/GeneralInformation_386_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation386LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation386LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation386LineIcon.Style = SvgIcon;
GeneralInformation386LineIcon.displayName = 'GeneralInformation386LineIcon';

export default GeneralInformation386LineIcon
