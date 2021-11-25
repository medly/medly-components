import { fireEvent, render, screen } from '@test-utils';
import { FC, useRef, useState } from 'react';
import { useOuterClickNotifier } from '../useOuterClickNotifier';

const createTestContainer = (spyFns?: (() => void)[]) => {
    let innerNextSpyFn: (() => void) | undefined;
    const nextSpyFn = () => (innerNextSpyFn ? innerNextSpyFn() : undefined);
    const TestContainer: FC = () => {
        const ref1 = useRef<HTMLInputElement>(null);
        const ref2 = useRef<HTMLInputElement>(null);
        const [spyFnIndex, setSpyFnIndex] = useState(0);
        const spyFn = spyFns
            ? spyFns[spyFnIndex]
            : () => {
                  // no-op
              };
        innerNextSpyFn = () => {
            setSpyFnIndex(spyFns ? (spyFnIndex + 1) % spyFns.length : 0);
        };
        useOuterClickNotifier(spyFn, ref1);
        return (
            <div>
                <input ref={ref1} type="text" value="Text1" />
                <input ref={ref2} type="text" value="Text2" />
                <button type="submit" onClick={nextSpyFn}>
                    Submit
                </button>
            </div>
        );
    };
    return { nextSpyFn, TestContainer };
};

describe('useOuterClickNotifier', () => {
    it('should invoke callback for click focus then defocus', () => {
        const spyFn = jest.fn();
        const { TestContainer } = createTestContainer([spyFn]);
        render(<TestContainer />);
        fireEvent.click(screen.getByDisplayValue('Text1'));
        expect(spyFn).not.toHaveBeenCalled();
        fireEvent.click(screen.getByText('Submit'));
        expect(spyFn).toHaveBeenCalled();
    });

    it('should invoke callback on esc key', () => {
        const spyFn = jest.fn();
        const { TestContainer } = createTestContainer([spyFn]);
        const { container } = render(<TestContainer />);
        fireEvent.keyDown(container, { keyCode: 27 });
        expect(spyFn).toHaveBeenCalled();
    });

    it('should invoke updated callback after it changes', () => {
        const spyFn1 = jest.fn();
        const spyFn2 = jest.fn();
        const { TestContainer, nextSpyFn } = createTestContainer([spyFn1, spyFn2]);
        render(<TestContainer />);
        fireEvent.click(screen.getByDisplayValue('Text2'));
        fireEvent.click(screen.getByText('Submit'));
        expect(spyFn1).toHaveBeenCalled();
        expect(spyFn2).not.toHaveBeenCalled();
        nextSpyFn();
        fireEvent.click(screen.getByDisplayValue('Text2'));
        fireEvent.click(screen.getByText('Submit'));
        expect(spyFn2).toHaveBeenCalled();
    });

    it('should not invoke callback after unmount', () => {
        const spyFn = jest.fn();
        const { TestContainer } = createTestContainer([spyFn]);
        const { container, unmount } = render(<TestContainer />);
        unmount();
        fireEvent.click(container);
        expect(spyFn).not.toHaveBeenCalled();
        fireEvent.keyDown(container, { keyCode: 27 });
        expect(spyFn).not.toHaveBeenCalled();
    });
});
