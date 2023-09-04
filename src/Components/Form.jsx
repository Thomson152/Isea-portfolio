import React from 'react'


const Form = () => {
  return (
    <div>
        <form className="mt-7 flex flex-col space-y-4">
              <input type="text" className="py-4 rounded px-2 font text-black required outline-none" placeholder="Full Name" />
              <input type="text" className="py-4 rounded px-2 font text-black required outline-none"  placeholder="Email Address" />
              <input type="text" className="py-4 rounded px-2 font text-black aria-required: outline-none"  placeholder="Phone Number" />
              <button className="ye md:py-4 py-3 md:text-2xl font text-xl hover:bg-orange-500 text-black font">Get Your Free Proposal</button>
            </form>
    </div>
  )
}

export default Form