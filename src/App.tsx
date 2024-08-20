import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from './Header';
import Landing from './Landing';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

export default function App() {
	const [showLanding, setShowLanding] = useState(true);
	const { ref: whiteSection1, inView: white1InView } = useInView({
		threshold: 0.5,
	});
	const { ref: whiteSection2, inView: white2InView } = useInView();

	useEffect(() => {
		setTimeout(() => {
			setShowLanding(false);
		}, 2600);
	}, []);

	return (
		<div className='  text-white bg-black'>
			<AnimatePresence mode='wait'>
				{showLanding && (
					<motion.div
						key={'landing'}
						exit={{ y: '-100%', transition: { duration: 0.3 } }}
					>
						<Landing />
					</motion.div>
				)}
				{!showLanding && (
					<motion.main>
						<Header isInView={white1InView || white2InView} />
						<Section1 />
						<section ref={whiteSection1} className='sticky top-0 z-20'>
							<Section2 />
						</section>
						<Section3 />
						<section
							ref={whiteSection2}
							className='bg-white relative top-0 z-40'
						>
							<Section4 />
						</section>
						<Section5 />
					</motion.main>
				)}
			</AnimatePresence>
		</div>
	);
}
