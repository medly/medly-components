import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import ItalIconSvg from '../../assets/Editor/ital_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const ItalIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <ItalIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

ItalIcon.Style = SvgIcon;
ItalIcon.displayName = 'ItalIcon';

export default ItalIcon
