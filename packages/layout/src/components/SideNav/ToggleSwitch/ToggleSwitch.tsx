import { Text } from '@medly-components/core';
import { MenuExpandIcon, MenuHideIcon } from '@medly-components/icons';
import { FCC } from 'react';
import NavItem from '../NavItem';
import * as Styled from './ToggleSwitch.styled';
import { Props } from './types';

export const ToggleSwitch: FCC<Props> = ({ id, isActive, expandedToggleText, collapsedToggleText, onClick }) => (
    <Styled.ToggleContainer>
        <NavItem onClick={onClick}>
            {isActive ? (
                <MenuHideIcon id={`${id}-hide`} title={`${id}-hide`} />
            ) : (
                <MenuExpandIcon id={`${id}-expand`} title={`${id}-expand`} />
            )}
            <Text>{isActive ? expandedToggleText ?? `Hide Menu` : collapsedToggleText ?? `Open Menu`}</Text>
        </NavItem>
    </Styled.ToggleContainer>
);
