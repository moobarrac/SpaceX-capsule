import React from "react";

const Modal = ({information}) => {
  return (
    <div className={`fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center`}>
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-indigo-800 opacity-75"></div>
      </div>
      <div className="bg-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-centersm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-blue-400">
                {information.capsule_id}
              </h3>
              <div className="mt-2 gap-2">
                <p className="text-sm text-white leading-5">
                  {information.capsule_serial}
                </p>
                <p className="text-sm text-white leading-5">
                  {information.details}
                </p>
                <p className="text-sm text-white leading-5">
                  Landings: {information.landings}
                </p>
                <p className="text-sm text-white leading-5">
                  Original Launch: {information.original_launch}
                </p>
                <p className="text-sm text-white leading-5">
                  Original Launch Unix: {information.original_launch_unix}
                </p>
                <p className="text-sm text-white leading-5">
                  Reuse Count: {information.reuse_count}
                </p>
                <p className="text-sm text-white leading-5">
                  Status: {information.status}
                </p>
                <p className="text-sm text-white leading-5">
                  Type: {information.type}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-800">
              Close
            </button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Modal;
