import React, {useState} from 'react'
import cn from 'classnames'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Configure,
  Panel,
  Hits,
  Highlight
} from 'react-instantsearch-dom'

const searchClient = algoliasearch(
  'B1G2GM9NG0',
  'aadef574be1f9252bb48d4ea09b5cfe5'
)

function Hit(props) {
  return (
    <>
      <div className="flex justify-between space-x-3 ">
        <div className="hit-name">
          <Highlight attribute="name" hit={props.hit} />
        </div>
        <div className="hit-price">${props.hit.price}</div>
        <img src={props.hit.image} alt={props.hit.name} />
      </div>
    </>
  )
}

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
  'w-100 flex flex-col items-center justify-between relative'

const SearchForm: React.FC<SearchFormProps> = ({
  text,
  classes
}: SearchFormProps) => {
  const [isToggled, setToggled] = useState(false)
  const toggleSearch = () => setToggled(!isToggled)
  return (
    <div className={cn(defaultStyles, classes)}>
      <InstantSearch searchClient={searchClient} indexName="demo_ecommerce">
        <Configure hitsPerPage={5} />
        <SearchBox onChange={toggleSearch} />
        {isToggled && (
          <Panel header="Results" className="absolute top-0 pt-10">
            <Hits hitComponent={Hit} />
          </Panel>
        )}
      </InstantSearch>
    </div>
  )
}

export default SearchForm
