import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import EuroSymbolIconSvg from '../../assets/Action/euro_symbol_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const EuroSymbolIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <EuroSymbolIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

EuroSymbolIcon.Style = SvgIcon;
EuroSymbolIcon.displayName = 'EuroSymbolIcon';

export default EuroSymbolIcon
