import {
	motion,
	useScroll,
	useTransform,
	useMotionTemplate,
} from 'framer-motion';
import { useRef } from 'react';
import { ReactLenis } from 'lenis/react';

export default function App() {
	return (
		<div className='bg-zinc-950'>
			<ReactLenis root options={{ infinite: true }}>
				<Hero />
				<div className='h-screen ' />
			</ReactLenis>
		</div>
	);
}

const SECTION_HEIGHT = 1500;

const Hero = () => {
	return (
		<div
			className=' relative w-full'
			style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
		>
			<CenteredImage />
			<ParallaxImages />
			<div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950' />
		</div>
	);
};

const ParallaxImages = () => {
	return (
		<div className='mx-auto max-w-5xl px-4 pt-[200px] relative z-20 '>
			<ParallaxImg
				src='https://images.unsplash.com/photo-1719205153554-33eb4834cc36?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='simple'
				start={-200}
				end={200}
				className='w-1/4'
			/>
			<ParallaxImg
				src='https://images.unsplash.com/photo-1685322556482-65dc456a59ea?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='simple'
				start={200}
				end={-250}
				className='w-1/2 mx-auto '
			/>
			<ParallaxImg
				src='https://images.unsplash.com/photo-1687698033881-614dda392379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='simple'
				start={0}
				end={-500}
				className='w-1/3 ml-auto '
			/>
		</div>
	);
};

const CenteredImage = () => {
	const { scrollY } = useScroll();
	const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);

	const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

	const opacity = useTransform(
		scrollY,
		[SECTION_HEIGHT, SECTION_HEIGHT + 500],
		[1, 0]
	);

	const backgroundSize = useTransform(
		scrollY,
		[0, SECTION_HEIGHT + 500],
		['170%', '100%']
	);

	return (
		<motion.div
			className='sticky top-0 h-screen w-full'
			style={{
				opacity,
				backgroundSize,
				clipPath,
				backgroundImage:
					'url(https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
			}}
		/>
	);
};

const ParallaxImg = ({
	className,
	alt,
	src,
	start,
	end,
}: {
	className?: string;
	alt: string;
	src: string;
	start: number;
	end: number;
}) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [`${start}px end`, `end ${end * -1}px`],
	});

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
	const y = useTransform(scrollYProgress, [0, 1], [start, end]);
	const borderRadius = useTransform(scrollYProgress, [0, 0.75], ['0%', '20%']);
	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

	return (
		<motion.img
			style={{ opacity, transform, borderRadius }}
			ref={ref}
			src={src}
			alt={alt}
			className={className}
		/>
	);
};
