'use client'
import { useEffect } from 'react'
import { IoIosClose } from 'react-icons/io'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	if (!isOpen) return null

	const handleOutsideClick = (e: any) => {
		if (e.target.id === 'modal-overlay') {
			onClose()
		}
	}

	return (
		<div
			id='modal-overlay'
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
			onClick={handleOutsideClick}>
			<div className='py-8 bg-light-gray rounded-[3px] w-[90vw] md:w-[40vw] relative md:px-10'>
				<button className='absolute top-2 right-2 hover:text-gray-900' onClick={onClose}>
					<IoIosClose size={25} color='#808080' fill='#808080' />
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
