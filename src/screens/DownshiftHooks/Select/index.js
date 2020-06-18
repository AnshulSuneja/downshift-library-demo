import React, { useState } from 'react'
import classnames from 'classnames'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'

import { citiesList } from '../../../api/getHardCodedCities'

import './Select.css'

const Select = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleSelectClicks = (direction) => {
    const updatedIndex =
      direction === 'left' ? selectedIndex - 1 : selectedIndex + 1
    setSelectedIndex(updatedIndex)
  }

  return (
    <div className='select'>
      <title>{'Select implementation by downshift hook'}</title>
      <label>{'Select city'}</label>
      <div className='selector'>
        <CaretLeftOutlined
          className={classnames('select-button', selectedIndex <= 0 && 'active')}
          onClick={() => handleSelectClicks('left')}
        />
        {citiesList[selectedIndex]}
        <CaretRightOutlined
          className={classnames('select-button', selectedIndex >= citiesList.length -1 && 'active')}
          onClick={() => handleSelectClicks('right')}
        />
      </div>
    </div>
  )
}

export default Select
