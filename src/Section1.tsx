import { useScroll, useTransform, motion } from 'framer-motion';
export default function Section1() {
	const sectionHeight = 470;
	const { scrollY } = useScroll();
	const scale = useTransform(scrollY, [0, sectionHeight], ['100%', '50%']);
	return (
		<section className='pt-16 h-screen sticky top-0 -z-0 '>
			<motion.div
				className=' flex flex-col items-center justify-around '
				style={{ scale, height: sectionHeight }}
			>
				<h1 className='font-geograph font-extrabold blur-[0.34px] uppercase  text-5xl text-white tracking-wider text-center'>
					<span className='block'>When you see differently,</span>
					<span className='block'>you can act originally,</span>
					<span className='block'>and achieve exceptionally</span>
				</h1>
				<p className='text-center  font-geograph w-1/2 '>
					Monoceros is a proprietary trading firm and early-stage investor
				</p>
				<p className='underline cursor-pointer text-center font-geograph'>
					About
				</p>
			</motion.div>
		</section>
	);
}
