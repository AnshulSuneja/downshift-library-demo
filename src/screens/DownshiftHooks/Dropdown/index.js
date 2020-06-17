import React from 'react'
import { useSelect } from 'downshift'
import {
  CaretDownOutlined,
  CaretRightOutlined,
  CheckCircleTwoTone,
} from '@ant-design/icons'

import { citiesList } from '../../../api/getHardCodedCities'

import './Dropdown.css'

const Dropdown = () => {
  // Passing our options list in useSelect hook and getting the props it is providing
  const {
    isOpen, // Boolean which tells, if dropdown list is open or not
    selectedItem, // Currently selected item from the list
    getToggleButtonProps,
    getLabelProps, // Can pass this prop in label element
    getMenuProps,
    highlightedIndex, // Index of the currently hovered item
    getItemProps, // Method to get props of a particular item
  } = useSelect({ items: citiesList })

  return (
    <div className='dropdown'>
      <title>{'Dropdown implementation by downshift hook'}</title>
      <label {...getLabelProps()}>{'Select city'}</label>
      <button {...getToggleButtonProps()} className='button'>
        <span className='button-text'>
          {selectedItem || 'Select city'}
          {isOpen ? <CaretDownOutlined /> : <CaretRightOutlined />}
        </span>
      </button>
      <div {...getMenuProps()} className={isOpen ? 'list' : ''}>
        <div className='list-container'>
          {isOpen &&
            citiesList.map((item, index) => (
              <div
                className={
                  highlightedIndex === index
                    ? 'list-item list-item-hovered'
                    : 'list-item'
                }
                key={`${item}${index}`}
                {...getItemProps({ item, index })}
              >
                <span className='list-item-text'>
                  {item}
                  {selectedItem === item && (
                    <CheckCircleTwoTone
                      className='icon'
                      twoToneColor='#52c41a'
                    />
                  )}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Dropdown
