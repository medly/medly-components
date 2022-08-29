import { cleanup } from '@test-utils';
import ModalManager from './ModalManager';

function createModalElement(text: string) {
    const el = document.createElement('div');
    el.appendChild(document.createTextNode(text));
    return el;
}

const Modal1 = createModalElement('Modal 1');
const Modal2 = createModalElement('Modal 2');
const Modal3 = createModalElement('Modal 2');

describe('Modal component', () => {
    afterEach(cleanup);

    const modalManager = new ModalManager();

    it('should add modals to modal list', () => {
        const idx1 = modalManager.add(Modal1);
        expect(idx1).toBe(0);

        const idx2 = modalManager.add(Modal2);
        expect(idx2).toBe(1);

        const idx3 = modalManager.add(Modal3);
        expect(idx3).toBe(2);
    });

    it('should remove modals to modal list', () => {
        const idx1 = modalManager.remove(Modal3);
        expect(idx1).toBe(2);

        const idx2 = modalManager.remove(Modal2);
        expect(idx2).toBe(1);

        const idx3 = modalManager.remove(Modal1);
        expect(idx3).toBe(0);
    });

    it('should return the index of modal if it already exists', () => {
        const idx = modalManager.add(Modal1);
        expect(idx).toBe(0);

        const idx2 = modalManager.add(Modal2);
        expect(idx2).toBe(1);

        const idxTemp1 = modalManager.add(Modal1);
        expect(idxTemp1).toBe(0);

        const idxTemp2 = modalManager.add(Modal2);
        expect(idxTemp2).toBe(1);

        // Cleanup
        modalManager.remove(Modal1);
        modalManager.remove(Modal2);
    });

    it('should return -1 if there is an attempt to remove a modal that does not exist', () => {
        const idx = modalManager.remove(Modal1);
        expect(idx).toBe(-1);
    });

    it('should return correct top modal in stacking context', () => {
        modalManager.add(Modal1);
        expect(modalManager.isTopModal(Modal1)).toBe(true);
        expect(modalManager.isTopModal(Modal2)).toBe(false);
        expect(modalManager.isTopModal(Modal3)).toBe(false);

        modalManager.add(Modal2);
        expect(modalManager.isTopModal(Modal1)).toBe(false);
        expect(modalManager.isTopModal(Modal2)).toBe(true);
        expect(modalManager.isTopModal(Modal3)).toBe(false);

        modalManager.add(Modal3);
        expect(modalManager.isTopModal(Modal1)).toBe(false);
        expect(modalManager.isTopModal(Modal2)).toBe(false);
        expect(modalManager.isTopModal(Modal3)).toBe(true);

        modalManager.remove(Modal1);
        expect(modalManager.isTopModal(Modal1)).toBe(false);
        expect(modalManager.isTopModal(Modal2)).toBe(false);
        expect(modalManager.isTopModal(Modal3)).toBe(true);

        modalManager.remove(Modal3);
        expect(modalManager.isTopModal(Modal1)).toBe(false);
        expect(modalManager.isTopModal(Modal2)).toBe(true);
        expect(modalManager.isTopModal(Modal3)).toBe(false);
    });
});
