import React from 'react';

const LoginModal = () => {
  return (
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor='login-modal' className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </label>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="admin-id" className="sr-only">
                Admin ID
              </label>
              <input
                id="admin-id"
                name="text"
                type="text"
                autoComplete="text"
                required
                className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                placeholder="Admin ID"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:pl-2 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-black-600 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-gray-600 py-2 px-3 text-sm font-semibold text-white hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 bg-gray-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
