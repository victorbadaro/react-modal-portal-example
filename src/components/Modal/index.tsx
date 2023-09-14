import { createPortal } from 'react-dom';
import { ModalProps } from './types';

import styles from './styles.module.css';

export function Modal({ isOpen, onClose }: ModalProps) {
	return isOpen ? createPortal(
		<div className={styles.modal}>
			<div className={styles.content}>
				<button
					type="button"
					className={styles['close-button']}
					onClick={onClose}
				>
					close
				</button>
			</div>
		</div>,
		document.body
	) : null;
}
