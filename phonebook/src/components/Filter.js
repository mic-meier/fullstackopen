import React from 'react'

const Filter = ({searchTerm, handleSearch}) => {
  return (
  <div>
    Filter: <input value={searchTerm} onChange={handleSearch} />
  </div>

  )
}

export default Filter;