import { useState } from 'react';
import Button from '../Button';
import Text from '../Text';
import { Accordion } from './Accordion';

export const AccordionWithActiveStateFromOutside = () => {
    const [active, setActive] = useState(false);

    return (
        <>
            <Accordion active={active} onChange={setActive}>
                <Accordion.Header>
                    <div style={{ backgroundColor: '#e6effd', padding: `1.8rem` }}>
                        <Text>Header</Text>
                    </div>
                </Accordion.Header>
                <Accordion.Content>
                    <div style={{ backgroundColor: '#ecfbf9', padding: `1.8rem` }}>
                        <Text>Content</Text>
                    </div>
                </Accordion.Content>
            </Accordion>
            <Button onClick={() => setActive(val => !val)} edges="square" style={{ margin: `20px 0`, float: 'right' }} size="S">
                Toggle Active
            </Button>
        </>
    );
};
