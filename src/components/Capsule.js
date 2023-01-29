import React from 'react'

const Capsule = ({capsule}) => {
  return (
    <>
      <div className='bg-blue-600 shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition' 
      data-testid="capsule-container">
        <div className="bg-blue-900 p-6 rounded-lg shadow-md text-white">
          <h3 className="text-lg font-medium">Capsule ID: {capsule.capsule_id}</h3>
          <div className="my-4">
            <span className="font-medium">Serial:</span> {capsule.capsule_serial}
          </div>
          <div className="my-4">
            <span className="font-medium">Type:</span> {capsule.type}
          </div>
          <div className="my-4">
            <span className="font-medium">Status:</span> {capsule.status}
          </div>
          <div className="my-4">
            <span className="font-medium">Original Launch:</span> {capsule.original_launch}
          </div>
          <div className="my-4">
            <span className="font-medium">Missions:</span>
            <ul className="flex">
              {capsule.missions.map((mission, index) => (
                <li key={index}>{mission.name}{" "}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Capsule