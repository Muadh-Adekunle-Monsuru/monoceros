import { useScroll, useTransform, motion } from 'framer-motion';

export default function Section2() {
	const sectionHeight = window.innerHeight;
	const { scrollY } = useScroll();
	const scale = useTransform(
		scrollY,
		[sectionHeight, sectionHeight * 2],
		['100%', '50%']
	);
	return (
		<section className='pt-56 pb-20 h-screen bg-white text-black font-geograph'>
			<motion.div
				className='flex flex-col items-center gap-14 '
				style={{ scale, height: sectionHeight }}
			>
				<h1 className='text-5xl uppercase font-black blur-[0.3px]'>
					ventures in action
				</h1>
				<p className='lg:max-w-sm text-center text-sm blur-[0.3px]'>
					Transformational change doesn’t just happen. It’s built. Monoceros
					seeks out the rare, trailblazing founders who dare to dream bigger. We
					partner with them to reshape tomorrow.
				</p>
				<p className='uppercase underline cursor-pointer text-sm underline-offset-4 font-semibold'>
					ventures
				</p>
			</motion.div>
		</section>
	);
}
