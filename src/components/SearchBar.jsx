

export function SearchBar(props) {
    return (
        <>
            <input className="px-4 rounded-5 border-primary" type="text" placeholder="Search.." onChange={props.handleChange} />
        </>
    )
}