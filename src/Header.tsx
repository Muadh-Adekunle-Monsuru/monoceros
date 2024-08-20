import { useRef, useState } from 'react';
import Logo from './Logo';
import {
	useAnimate,
	motion,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion';

export default function Header({ isInView }: { isInView: Boolean }) {
	const elements = useRef([useAnimate(), useAnimate(), useAnimate()]);

	const [visible, setVisible] = useState(false);

	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const preVal = scrollY.getPrevious();
		if (latest > preVal! && latest > 150) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	});

	const mouseHover = (index: number) => {
		const [_, animate] = elements.current[index];
		animate('span', { scale: '100%', opacity: 1 });
	};
	const mouseLeave = (index: number) => {
		const [_, animate] = elements.current[index];
		animate('span', { scale: '0%', opacity: 0 });
	};
	const menuItems = ['About', 'Training', 'Ventures'];

	return (
		<div className='fixed top-0 w-full p-3 flex items-center justify-between px-5'>
			<motion.div
				variants={{
					visible: { y: 0 },
					hidden: { y: '-100%', opacity: 0 },
				}}
				animate={visible ? 'hidden' : 'visible'}
				transition={{ duration: 0.65, ease: 'easeInOut' }}
				className={`flex gap-6 items-center font-geograph  uppercase text-xs md:text-sm	w-full ${
					isInView ? 'text-black' : 'text-white'
				}`}
			>
				{menuItems.map((item, index) => {
					const [scope] = elements.current[index];
					return (
						<p
							ref={scope}
							key={index}
							onMouseOver={() => mouseHover(index)}
							onMouseLeave={() => mouseLeave(index)}
							className='cursor-pointer hidden md:block'
						>
							{item}
							<motion.span
								initial={{ scale: 0 }}
								className='border block border-white mt-1'
							/>
						</p>
					);
				})}
			</motion.div>
			<div className='w-1/3'>
				<Logo isInView={isInView} />
			</div>
			<div className='w-full'></div>
		</div>
	);
}
