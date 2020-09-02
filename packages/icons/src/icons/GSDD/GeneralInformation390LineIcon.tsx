import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation390LineIconSvg from '../../assets/GSDD/GeneralInformation_390_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation390LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation390LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation390LineIcon.Style = SvgIcon;
GeneralInformation390LineIcon.displayName = 'GeneralInformation390LineIcon';

export default GeneralInformation390LineIcon
