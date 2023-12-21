import React from 'react'

const TopbarComponent = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl' href='/'>
          FinancEd
        </a>
      </div>
      <div className='flex-none'>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className='btn'
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Wallet
        </button>
        <dialog id='my_modal_1' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg'>Earnings</h3>
            <p className='py-4'>
              Press ESC key or click the button below to close
            </p>
            <div>
              Total earning: <div className='badge badge-secondary'>$100+</div>
            </div>
            <div>
              Courses learned: <div className='badge badge-secondary'>5</div>
            </div>
            <div>
              Survey filled: <div className='badge badge-secondary'>10</div>
            </div>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn'>Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default TopbarComponent
