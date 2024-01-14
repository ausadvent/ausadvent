import React from 'react'

export default function Framework() {
  return (
    <div className='page py-[2rem]'>
        <h2 className='cormorant text-[1.5rem] text-[#1E3A8A] font-bold'>FRAMEWORK OF PRACTICE</h2>
        <h3 className='cormorant mt-[1rem] text-[1.5rem] text-[#1E3A8A] font-bold'>Person-Centred Approach</h3>
        <div className='mt-[2rem] flex flex-col gap-[1.5rem]'>
            <p>Our framework is rooted in person-centred approaches, empowering individuals to lead service design, planning, delivery, and review.</p>
            <p>We prioritise maximising the capacity of people with disabilities to control their lives, reflecting the Human Rights principles of respect, non-discrimination, and full participation.</p>
            <p>Guided by <span className='text-[#2563EB] font-bold'>National Standards</span> Ausadvent Care adheres to the six National Standards, ensuring the rights, participation, and individual outcomes of our participants.</p>
        </div>

        {/* National Standards */}
        <div className="flex-col"></div>
    </div>
  )
}
