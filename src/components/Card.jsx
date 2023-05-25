import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CardItem = ({ ...item }) => {
    const quantity = 0;

    return (
        <Card style={{ width: '18rem' }} key={item.id}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">{item.title}</Card.Title>
                {/* <Card.Text className="ms-2 text-muted"> */}
                <span className="fs-2">{item.title}</span>
                <span className="ms-2 text-muted">{item.id.slice(0, 4)}</span>

                {/* </Card.Text> */}
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button variant="primary">Add to Cart</Button>
                    ) : <div className='d-flex align-items-center flex-column' style={{ gap: '.5rem' }}>
                        <div className='d-flex align-items-center justify-content-center' style={{ gap: '.5rem' }}>
                            <Button>-</Button>
                            <div>
                                <span className="fs-3">{quantity}</span> in Cart
                            </div>
                            <Button>+</Button>
                        </div>
                        <Button variant='danger' size='sm'>Remove</Button>
                    </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}
