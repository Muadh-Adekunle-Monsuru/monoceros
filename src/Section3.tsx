import { useScroll, useTransform, motion } from 'framer-motion';

export default function Section3() {
	const sectionHeight = 470;
	const { scrollY } = useScroll();
	const scale = useTransform(scrollY, [1120, 1490], ['100%', '50%']);
	return (
		<section className='pt-56 pb-20 h-screen bg-black text-white font-geograph sticky top-0 z-30'>
			<motion.div
				className='flex flex-col items-center gap-14 '
				style={{ scale, height: sectionHeight }}
			>
				<h1 className='text-5xl uppercase font-black blur-[0.3px]'>
					trading for impact
				</h1>
				<p className='lg:max-w-sm text-center text-sm blur-[0.3px]'>
					In trading, there's no static edge, only dynamic opportunity.
					Monoceros combines pioneering research, cutting-edge technology, and
					world-class talent to remain at the forefront. Those who fail to adapt
					are left behind.
				</p>
				<p className='uppercase underline cursor-pointer text-sm underline-offset-4 font-semibold'>
					Trading
				</p>
			</motion.div>
		</section>
	);
}
