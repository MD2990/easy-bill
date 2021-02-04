export default function PurchaseOrder() {
	return (
		<>
			<div className='flex flex-col h-screen bg-gray-100'>
				<div className='grid place-items-center mx-2 my-20 sm:my-auto'>
					<div className='formBackground'>
						<h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
							New Purchase Order
						</h2>
						<form className='mt-10'>
							{/* Email Input */}
							<div className='flex-row'>
								<label
									htmlFor='order'
									className='text-sm ml-4 font-semibold text-gray-600 uppercase'>
									E-mail
								</label>
								<input
									type='text'
									name='order'
									placeholder='Order Number'
									autoComplete='false'
									className='text-input'
									required
								/>
							</div>

							<label
								htmlFor='password'
								className='block mt-5 text-sm ml-4 font-semibold text-gray-600 uppercase'>
								Password
							</label>
							<input
								id='password'
								type='password'
								name='password'
								placeholder='password'
								autoComplete='current-password'
								className='text-input'
								required
							/>
							<button type='submit' className='btn-blue'>
								Login
							</button>
							<div className='sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center'>
								<a href='forgot-password' className='flex-2 underline'>
									Forgot password?
								</a>
								<p className='flex-1 text-gray-500 text-md mx-4 my-1 sm:my-auto'>
									or
								</p>
								<a href='register' className='flex-2 underline'>
									Create an Account
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
