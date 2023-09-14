import { ModalProps } from './types';

import styles from './styles.module.css';

export function Modal({ isOpen, onClose }: ModalProps) {
	return isOpen ? (
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
		</div>
	) : null;
}
