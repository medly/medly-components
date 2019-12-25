import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DropdownIcon from '../DropdownIcon';
import { Props } from './types';

export const NavText: React.SFC<Props> & WithStyle = React.memo(props => {
    return (
        <>
            <Text {...props} />
            {props.showDropdownIcon && <DropdownIcon size="XS" />}
        </>
    );
});
NavText.displayName = 'NavText';
NavText.Style = Text.Style;
