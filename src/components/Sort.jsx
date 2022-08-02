import { Button } from 'react-bootstrap'

export function Sort(props) {
    return (
        <div className="d-flex my-4">
            <Button variant="outline-primary" onClick={props.sortFromCheap} style={{marginRight:"1rem"}}>From cheap</Button>
            <Button variant="outline-primary" onClick={props.sortFromExpensive}>From expensive</Button>
        </div>
    )
}