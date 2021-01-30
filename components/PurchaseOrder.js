export default function PurchaseOrder() {
	return (
		<>
			<div className='flex flex-col h-screen bg-gray-100'>
				<div className='grid place-items-center mx-2 my-20 sm:my-auto'>
					<div
						className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
      px-6 py-10 sm:px-10 sm:py-6 
      bg-white rounded-lg shadow-md lg:shadow-lg'>
						<h2 className='text-center font-semibold text-3xl lg:text-4xl text-gray-800'>
							New Purchase Order
						</h2>
						<form className='mt-10' method='POST'>
							{/* Email Input */}
							<div className='flex-row'>
								<label
									htmlFor='email'
									className='text-sm ml-4 font-semibold text-gray-600 uppercase'>
									E-mail
								</label>
								<input
									id='email'
									type='email'
									name='email'
									placeholder='e-mail address'
									autoComplete='email'
									className=' w-full py-3 px-1 mt-2 text-center text-2xl
              text-gray-800 appearance-none 
              border-b-2 border-gray-100
			  focus:text-gray-500 focus:outline-none
			   focus:border-gray-200 rounded-full'
									required
								/>
							</div>

							{/* Password Input */}
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
								className='block w-full py-3 px-1 mt-2 mb-4
								text-center
              text-gray-800 appearance-none text-2xl
              border-b-2 border-gray-100
              focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-full'
								required
							/>
							{/* Auth Buttton */}
							<button
								type='submit'
								className='w-full py-3 mt-10 bg-gray-800 rounded-full
              font-medium text-white uppercase
              focus:outline-none hover:bg-gray-700 hover:shadow-none'>
								Login
							</button>
							{/* Another Auth Routes */}
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
