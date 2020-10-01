import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import GeneralInformation145LineIconSvg from '../../assets/GSDD/GeneralInformation_145_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const GeneralInformation145LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <GeneralInformation145LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

GeneralInformation145LineIcon.Style = SvgIcon;
GeneralInformation145LineIcon.displayName = 'GeneralInformation145LineIcon';

export default GeneralInformation145LineIcon
