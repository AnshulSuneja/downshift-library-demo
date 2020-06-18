import React from 'react'
import Downshift from 'downshift'
import classnames from 'classnames'

import { citiesList } from '../../../api/getHardCodedCities'

import './Buttons.css'

const Buttons = () => {
  return (
    <Downshift>
      {({
        getItemProps,
        getLabelProps,
        highlightedIndex,
        selectedItem,
      }) => {
        return (
          <div className='buttons'>
            <title>{'Buttons implementation by downshift component'}</title>
            <label {...getLabelProps()}>{'Select city'}</label>
            <div className='buttons-container'>
              {citiesList.map((item, index) => (
                <div
                  className={classnames(
                    'button-item',
                    highlightedIndex === index && 'button-item-hovered',
                    selectedItem === item && 'button-item-selected'
                  )}
                  key={`${item}${index}`}
                  {...getItemProps({ item, index })}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )
      }}
    </Downshift>
  )
}

export default Buttons
