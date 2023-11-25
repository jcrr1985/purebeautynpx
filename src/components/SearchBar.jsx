import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { categoriesList } from './itemsData'

const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  const options = categoriesList.flatMap((category) =>
    category.items.map((item) => ({ value: item.id, label: item.name })),
  )

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    // Aquí puedes realizar acciones adicionales según la opción seleccionada
  }

  return (
    <Select
      className='search-input'
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder='Search...'
      MenuProps={{
        PaperProps: {
          sx: {
            bgcolor: 'pink',
            '& .MuiMenuItem-root': {
              padding: 2,
              zIndex: 99999999999,
            },
          },
        },
      }}
      styles={{
        control: (base) => ({
          ...base,
          border: 'none',
          boxShadow: 'none',
        }),
      }}
    />
  )
}

export default SearchBar
