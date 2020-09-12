import React, {useState} from 'react'
import cn from 'classnames'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import {SearchIcon} from '../atoms/Icons'

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
  'bg-white focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal'

const SearchForm: React.FC<SearchFormProps> = ({
  text,
  classes
}: SearchFormProps) => {
  const [isToggled, setToggled] = useState(false)

  const toggleSearch = () => setToggled(!isToggled)
  return (
    <>
      {isToggled && (
        <div className={cn(defaultStyles, classes)}>
          <Label text={text}>
            <Input type="search" placeholder="Enter a keyword" />
            <Button text="Search" isDisabled={false} />
          </Label>
        </div>
      )}
      <button onClick={toggleSearch}>
        <SearchIcon />
      </button>
    </>
  )
}

export default SearchForm
