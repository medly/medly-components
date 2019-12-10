import { Text } from '@medly-components/core';
import { WithStyle } from '@medly-components/utils';
import React from 'react';
import DropdownIcon from '../DropdownIcon';
import { Props } from './types';

export const NavText: React.SFC<Props> & WithStyle = props => {
    return (
        <>
            <Text {...props} />
            {props.showDropdownIcon && <DropdownIcon size="XS" />}
        </>
    );
};

NavText.Style = Text.Style;
