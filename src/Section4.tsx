import UpArrow from './UpArrow';

export default function Section4() {
	return (
		<div className='h-[155vh] py-10 bg-white text-black font-geograph uppercase flex flex-col justify-around items-center text-center blur-[0.3px] px-4'>
			<div className='font-black text-6xl'>News and Updates</div>
			<div className='font-extrabold text-2xl w-full lg:w-1/3 cursor-pointer hover:underline hover:text-gray-800'>
				<p>
					KARATE COMBAT RAISES $18 MILLION IN FUNDING FROM BITKRAFT VENTURES
					<span className='inline ml-2'>
						<UpArrow />
					</span>
				</p>
			</div>
			<div className='font-extrabold text-2xl  w-full lg:w-1/3 cursor-pointer hover:underline hover:text-gray-800'>
				<p>
					HyperPlay raises $12M in Series A funding round
					<span className='inline ml-2'>
						<UpArrow />
					</span>
				</p>
			</div>
			<div className='font-extrabold text-2xl  w-full lg:w-1/3  cursor-pointer hover:underline hover:text-gray-800'>
				<p>
					Framework and Bitkraft lead $6 million seed funding into gaming studio
					<span className='inline ml-2'>
						<UpArrow />
					</span>
				</p>
			</div>
		</div>
	);
}
