import { Search } from "nextra/components"

//const searchOptions = { filters: { title: ["About OnePass"] } };
const searchOptions = { filters: { category: ["OnePass"] } }
export const CustomSearch = () => {
  return (
    <>
      <Search className="scale-150 origin-left" searchOptions={searchOptions} />
    </>
  )
}
