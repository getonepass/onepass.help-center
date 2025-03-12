import { Search } from "nextra/components"

//const searchOptions = { filters: { category: ["OnePass"] } };
const searchOptions = {}
export const CustomSearch = (params: { placeholder: string | undefined }) => {
  return (
    <>
      <Search
        className="scale-150 origin-left"
        placeholder={
          params.placeholder
            ? params.placeholder
            : "Search for a topic or question"
        }
        searchOptions={searchOptions}
      />
    </>
  )
}
