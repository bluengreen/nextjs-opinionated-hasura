import React, { OptionHTMLAttributes } from 'react'
import * as TestingLib from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { FormSelect } from './FormSelect'
import { fireEvent } from '@testing-library/react'

describe('Select Component', () => {
  it('should render a component', async () => {
    const render = TestingLib.render(
      <FormSelect
        label='Name'
        placeholder='Select an Item'
        name='input_name'
        register={() => {
          /* noop */
        }}
        validationErrors={''}
        className='text-lg select-accent'
        options={[
          { value: 'it1', label: 'item 1' },
          { value: 'it2', label: 'item 2' },
        ]}
      />
    )
    expect(render.getByText('Select an Item')).toBeInTheDocument()
  })

  it('should render component with default value', async () => {
    const render = TestingLib.render(
      <FormSelect
        label='Label'
        name='select_name'
        register={() => {
          /* noop */
        }}
        validationErrors={''}
        defaultValue='it2'
        className='text-lg select-accent'
        options={[
          { value: 'it1', label: 'item 1' },
          { value: 'it2', label: 'item 2' },
        ]}
      />
    )

    const allOptions = render.getAllByRole('option') as OptionHTMLAttributes<HTMLOptionElement>

    expect(allOptions[0].value).toEqual('__EMPTY_VALUE__')
    expect(allOptions[1].value).toEqual('it1')
    expect(allOptions[2].value).toEqual('it2')
  })

  it('should click and change the selected value', async () => {
    const render = TestingLib.render(
      <FormSelect
        label='Label'
        placeholder=''
        name='select_name'
        register={() => {
          /* noop */
        }}
        validationErrors={''}
        defaultValue='it2'
        className='text-lg select-accent'
        options={[
          { value: 'it1', label: 'item 1' },
          { value: 'it2', label: 'item 2' },
        ]}
      />
    )

    fireEvent.click(render.getByTestId('select_name'), { target: { value: 'it2' } })

    const select = render.getByTestId('select_name') as HTMLSelectElement
    expect(select.value).toEqual('it2')
  })

  it('should render component with error message', async () => {
    const render = TestingLib.render(
      <FormSelect
        label='Label'
        placeholder=''
        name='text_with_error'
        register={() => {
          /* noop */
        }}
        validationErrors={{
          text_with_error: {
            message: 'Error Message',
          },
        }}
        defaultValue='it2'
        className='text-lg select-accent'
        options={[
          { value: 'it1', label: 'item 1' },
          { value: 'it2', label: 'item 2' },
        ]}
      />
    )
    expect(render.getByText('Error Message')).toHaveClass('text-error')
  })
})
