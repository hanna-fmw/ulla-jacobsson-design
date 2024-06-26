const SizeChart = () => {
	return (
		<div className='md:px-8 flex justify-center items-center'>
			<table className='w-full table-auto border-collapse text-sm md:max-w-4xl md:text-sm'>
				<thead>
					<tr className='text-left'>
						<th className='font-inter text-xs font-medium p-3 border-b uppercase'>Storlek</th>
						<th className='font-inter text-xs font-medium p-3 border-b uppercase'>XS</th>
						<th className='font-inter text-xs font-medium p-3 border-b uppercase'>S/M</th>
						<th className='font-inter text-xs font-medium p-3 border-b uppercase'>L/XL</th>
						<th className='font-inter text-xs font-medium p-3 border-b uppercase'>2XL/3XL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='font-inter text-xs p-3 border-b'>Byst</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>84&ndash;104</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>98&ndash;114</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>114&ndash;130</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>76&ndash;92</span>
						</td>
					</tr>
					<tr>
						<td className='font-inter text-xs p-3 border-b'>Stuss</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>87&ndash;99</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>92&ndash;104</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>104&ndash;116</span>
						</td>
						<td className='font-inter p-3 border-b'>
							<span className='text-xs whitespace-nowrap'>116&ndash;135</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SizeChart
