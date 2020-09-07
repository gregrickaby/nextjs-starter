import React from 'react'
import cn from 'classnames'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

export interface SearchFormProps {
  /**
   * Optional. Label text.
   */
  text?: string
  /**
   * Optional. Additional CSS classes.
   */
  classes?: string
}

const defaultStyles =
  'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'

const SearchForm: React.FC<SearchFormProps> = ({
  text,
  classes
}: SearchFormProps) => {
  return (
    <div className={cn(defaultStyles, classes)}>
      <Label text={text}>
        <Input type="search" placeholder="Enter a keyword" />
        <Button text="Search" isDisabled={false} />
      </Label>
    </div>
  )
}

export default SearchForm
