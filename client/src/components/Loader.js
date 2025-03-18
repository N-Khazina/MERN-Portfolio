import React from 'react'

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-centerm bg-primary">
      <div className="flex gap-5 text-4xl font-semibold sm:text-3xl">
        <h1 className="text-white t">T</h1>
        <h1 className="text-tertiary n">N</h1>
        <h1 className="text-white h">H</h1>
      </div>
    </div>
  )
}

export default Loader
