import { Col, Row } from 'react-bootstrap'
import items from '../data/items'
import { StoreItem } from '../components/StoreItem'
import { SearchBar } from '../components/SearchBar'
import { useState} from 'react'
import { Sort } from '../components/Sort'


export function Store() {
    const [searchTerm, setSearchTerm] = useState('')
    const[sortingFunction, setSortingFunction] = useState()

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    const itemCards = items.filter((i) => {
        if (searchTerm == "") {
            return i
        } else if (i.title.toLowerCase().includes(searchTerm.toLowerCase())){
            return i
        } 
    }).sort((a, b) => eval(sortingFunction))

    

    function fromExpensive() {
        setSortingFunction(
            "b.price - a.price"
        )
    }

    function fromCheap() {
        setSortingFunction("a.price - b.price")
    }
    
    
    let newItems = itemCards.map((i) => {
    if (i) {
        return (
        <Col key={i.id}>
            <StoreItem {...i} />
        </Col>
        )
    } else {
        return (
            <div>Sorry didn't find anything</div>
        )
    }
    })
    

    return (
    <>
    <div className="d-flex justify-content-between my-4">
        <h1>Whatever you need</h1>
        <SearchBar handleChange={handleChange} />
    </div>

    <Sort 
       sortFromCheap={fromCheap}
       sortFromExpensive={fromExpensive}
    />
    
    <Row  xs={1} md={2} lg={3} xl={4} className="g-3">
        {newItems}
    </Row>

    
    </>
    )

}