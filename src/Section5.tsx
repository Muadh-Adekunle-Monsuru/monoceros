import Logo from './Logo';

export default function Section5() {
	return (
		<div className='h-full bg-black mt-20 z-50 w-full  flex flex-col justify-between pt-56'>
			<div className='flex justify-between text-white p-5 text-xs'>
				<div></div>
				<div>
					Inspired By{' '}
					<a href='https://www.monoceros.com/' className='font-bold'>
						Monoceros
					</a>
					<p>Made By Muadh</p>
				</div>
			</div>
			<div className='w-[90vw] py-1 mx-auto'>
				<Logo />
			</div>
		</div>
	);
}
