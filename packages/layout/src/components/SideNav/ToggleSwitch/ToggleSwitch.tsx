import { Text } from '@medly-components/core';
import { MenuExpandIcon, MenuHideIcon } from '@medly-components/icons';
import React from 'react';
import NavItem from '../NavItem';
import * as Styled from './ToggleSwitch.styled';
import { Props } from './types';

export const ToggleSwitch: React.FC<Props> = ({ id, isActive, onClick }) => (
    <Styled.ToggleContainer>
        <NavItem onClick={onClick}>
            {isActive ? (
                <MenuHideIcon id={`${id}-hide`} title={`${id}-hide`} />
            ) : (
                <MenuExpandIcon id={`${id}-expand`} title={`${id}-expand`} />
            )}
            <Text>{isActive ? `Hide Menu` : `Open Menu`}</Text>
        </NavItem>
    </Styled.ToggleContainer>
);
