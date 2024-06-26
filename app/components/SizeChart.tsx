const SizeChart = () => {
	return (
		<div className='px-8 flex justify-center items-center'>
			<table className='w-full max-w-4xl table-auto border-collapse text-base md:text-lg'>
				<thead>
					<tr className='text-left'>
						<th className='font-inter font-medium p-4 border-b uppercase'>Storlek</th>
						<th className='font-inter font-medium p-4 border-b uppercase'>XS</th>
						<th className='font-inter font-medium p-4 border-b uppercase'>S/M</th>
						<th className='font-inter font-medium p-4 border-b uppercase'>L/XL</th>
						<th className='font-inter font-medium p-4 border-b uppercase'>2XL/3XL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className='font-inter p-4 border-b'>Byst</td>
						<td className='font-inter p-4 border-b'>84&ndash;104</td>
						<td className='font-inter p-4 border-b'>98&ndash;114</td>
						<td className='font-inter p-4 border-b'>114&ndash;130</td>
						<td className='font-inter p-4 border-b'>76&ndash;92</td>
					</tr>
					<tr>
						<td className='font-inter p-4 border-b'>Stuss</td>
						<td className='font-inter p-4 border-b'>87&ndash;99</td>
						<td className='font-inter p-4 border-b'>92&ndash;104</td>
						<td className='font-inter p-4 border-b'>104&ndash;116</td>
						<td className='font-inter p-4 border-b'>116&ndash;135</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SizeChart
