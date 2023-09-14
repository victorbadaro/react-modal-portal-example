import { useState } from 'react';
import { Modal } from './components/Modal';

import './styles/global.css';

export function App() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<h1>react-modal-portal-example</h1>
			<button type="button" onClick={() => setIsOpen(true)}>open modal</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
}
