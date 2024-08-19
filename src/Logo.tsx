export default function Logo({ isInView }: { isInView?: Boolean }) {
	return (
		<svg
			viewBox='0 0 380 66'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='gucUK2 '
		>
			<path
				d='M60.992 0V62.945H50.6958V14.8571L28.7945 62.945H25.217L3.31573 14.7692V62.945H0V0H7.59127L30.8886 50.1978L53.837 0H60.992ZM107.325 42.1099C107.325 54.9451 98.2503 63.9121 86.9943 63.9121C75.3019 63.9121 67.1871 54.4176 67.1871 42.5494C67.1871 29.7143 76.2618 20.6593 87.605 20.6593C99.2101 20.6593 107.325 30.1538 107.325 42.1099ZM97.9013 48.1758C97.9013 34.2857 91.0953 23.5604 84.3766 23.5604C79.752 23.5604 76.6981 27.7802 76.6981 36.3956C76.6981 50.3736 83.4168 61.0989 90.2227 61.0989C94.76 61.0989 97.9013 56.7912 97.9013 48.1758ZM113.782 21.6264H119.192L123.031 29.011L131.844 21.5385C133.24 21.011 135.072 20.6593 136.294 20.6593C144.845 20.6593 149.993 26.7253 149.993 35.1648V62.8571H140.482V38.4176C140.482 31.5604 136.556 28.2198 131.669 28.2198C129.139 28.2198 126.783 29.0989 123.38 31.1209V62.945H113.869V21.6264H113.782ZM196.239 42.1099C196.239 54.9451 187.164 63.9121 175.908 63.9121C164.216 63.9121 156.101 54.4176 156.101 42.5494C156.101 29.7143 165.176 20.6593 176.519 20.6593C188.124 20.6593 196.239 30.1538 196.239 42.1099ZM186.815 48.1758C186.815 34.2857 180.009 23.5604 173.29 23.5604C168.666 23.5604 165.612 27.7802 165.612 36.3956C165.612 50.3736 172.331 61.0989 179.137 61.0989C183.674 61.0989 186.815 56.7912 186.815 48.1758ZM229.483 31.033C226.866 26.989 223.026 23.2967 218.664 23.2967C211.77 23.2967 208.455 29.5385 208.455 37.5385C208.455 47.8242 213.69 56.1758 224.073 56.1758C227.302 56.1758 229.658 55.2967 233.323 53.011L234.37 54.5934L224.248 63.2088C223.026 63.6483 221.456 64 219.449 64C208.106 64 199.904 55.033 199.904 43.4286C199.904 30.8571 209.065 20.4835 221.63 20.4835C227.04 20.4835 231.316 21.978 234.631 24.3516L229.483 31.033ZM272.326 52.7472L273.286 54.3297L262.466 63.2967C261.332 63.6483 259.587 64 257.405 64C246.149 64 237.336 55.7363 237.336 43.1648C237.336 30.8571 246.149 20.5714 256.969 20.5714C267.178 20.5714 274.507 28.1319 274.507 39.7363H245.887C246.149 50.1978 252.606 56 261.506 56C264.997 56 268.661 54.9451 272.326 52.7472ZM245.8 37.4505H264.822C264.386 28.5714 260.634 22.9451 255.573 22.9451C250.163 22.8571 246.237 28.6593 245.8 37.4505ZM305.047 30.5934C300.423 30.8571 294.576 31.9121 290.475 33.8462V62.8571H280.964V21.6264H286.462L290.388 31.7363L298.59 22.3297C300.073 21.5385 302.691 20.9231 305.134 20.9231L305.047 30.5934ZM346.93 42.1099C346.93 54.9451 337.855 63.9121 326.599 63.9121C314.907 63.9121 306.792 54.4176 306.792 42.5494C306.792 29.7143 315.867 20.6593 327.21 20.6593C338.815 20.6593 346.93 30.1538 346.93 42.1099ZM337.506 48.1758C337.506 34.2857 330.7 23.5604 323.982 23.5604C319.357 23.5604 316.303 27.7802 316.303 36.3956C316.303 50.3736 323.022 61.0989 329.828 61.0989C334.365 61.0989 337.506 56.7912 337.506 48.1758ZM363.858 64C358.622 64 353.125 62.8571 349.635 59.956L354.783 52.9231C357.226 57.5824 361.414 61.5385 365.952 61.5385C370.227 61.5385 373.194 58.9011 373.194 55.1209C373.194 51.8681 371.711 49.4066 366.301 47.033L359.146 43.956C353.561 41.4066 351.031 37.8901 351.031 33.0549C351.031 26.1099 357.313 20.4835 367.086 20.4835C371.536 20.4835 375.986 21.3626 379.302 23.2967L374.503 30.1538C371.711 25.6703 368.308 22.9451 363.945 22.9451C360.018 22.9451 357.837 25.4066 357.837 28.5714C357.837 31.2088 359.146 33.2308 364.032 35.3407L371.187 38.5934C377.121 41.4066 380 45.3626 380 50.3736C380 58.9011 372.932 64 363.858 64Z'
				fill={`${isInView ? 'black' : 'white'}`}
			></path>
		</svg>
	);
}
