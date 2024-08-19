import Logo from './Logo';
import { motion } from 'framer-motion';

export default function Landing() {
	return (
		<div className='bg-black h-screen text-white flex flex-col items-center justify-between'>
			<div></div>
			<div className='size-32 leading-none'>
				<div className='flex items-center justify-between leading-none -m-3'>
					<motion.img
						initial={{ opacity: 0, scale: '0%' }}
						animate={{ opacity: 1, scale: '100%' }}
						transition={{ delay: 0.3, duration: 0.5 }}
						src='/star-2.svg'
						className=' size-12'
					/>
					<motion.img
						initial={{ opacity: 0, scale: '0%' }}
						animate={{ opacity: 1, scale: '100%' }}
						transition={{ delay: 0.6, duration: 0.5 }}
						src='/star-2.svg'
						className='size-12'
					/>
				</div>
				<motion.img
					initial={{ opacity: 0, scale: '0%' }}
					animate={{ opacity: 1, scale: '100%' }}
					transition={{ delay: 0.9, duration: 0.5 }}
					src='/star-2.svg'
					className='mx-auto size-20'
				/>
				<div className='flex items-center justify-between leading-none -m-3'>
					<motion.img
						initial={{ opacity: 0, scale: '0%' }}
						animate={{ opacity: 1, scale: '100%' }}
						transition={{ delay: 0.5, duration: 0.5 }}
						src='/star-2.svg'
						className='size-12'
					/>
					<motion.img
						initial={{ opacity: 0, scale: '0%' }}
						animate={{ opacity: 1, scale: '100%' }}
						transition={{ delay: 0.7, duration: 0.5 }}
						src='/star-2.svg'
						className='size-12'
					/>
				</div>
			</div>
			<div className='w-[90vw] py-1'>
				<Logo />
			</div>
		</div>
	);
}
