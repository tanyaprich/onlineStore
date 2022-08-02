import { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency"

export function StoreItem({ title, price, imgUrl }) {
    return (
    <Card>
        <Card.Img variant="top" src={imgUrl} height="300px" style={{ objectFit: "cover"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-5">{title}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
        </Card.Body>
    </Card>
    )
}