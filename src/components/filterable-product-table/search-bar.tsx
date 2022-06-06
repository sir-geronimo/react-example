import React from 'react'

export type Props = {
  filter: string,
  inStockOnly: boolean,
  onFilterChange: React.ChangeEventHandler,
  onInStockOnlyChange: React.ChangeEventHandler,
}

export function SearchBar({
  filter,
  inStockOnly,
  onFilterChange,
  onInStockOnlyChange,
}: Props) {
  return (
    <form>
      <input
        type="text"
        className="form-control
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
        placeholder="Search something..."
        value={filter}
        onChange={onFilterChange}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={onInStockOnlyChange}
        />
        {' '}
        Only show in stock
      </p>
    </form>
  )
}