import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import SpellcheckIconSvg from '../../assets/Action/spellcheck_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SpellcheckIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SpellcheckIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SpellcheckIcon.Style = SvgIcon;
SpellcheckIcon.displayName = 'SpellcheckIcon';

export default SpellcheckIcon
