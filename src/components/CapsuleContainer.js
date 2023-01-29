import React, { useContext } from 'react'
import { SpaceContext } from '../context/ContextProvider'
import Capsule from './Capsule'

const CapsuleContainer = () => {
  const {capsules} = useContext(SpaceContext)

  if(capsules.length < 1) {
    return <section className='mb-60' data-testid='capsule-container'>
      <div className='container mx-auto'>
        <div className='text-center text-3xl mt-48 text-gray-400'>
          Add an input and search for capsules
        </div>
      </div>
    </section>
  }

  return (
    <section className='mb-40' data-testid='capsule-container'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {capsules?.map((capsule, index) => {
            return (
              <div key={index} data-testid="capsule-card">
                <Capsule capsule={capsule} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CapsuleContainer