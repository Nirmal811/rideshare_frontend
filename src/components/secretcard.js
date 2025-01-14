import Card from 'react-bootstrap/Card';

function secretCard(secretdetails) {
  return (
    <div>
        <div className='container'>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{secretdetails.user}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{secretdetails.heading}</Card.Subtitle>
                <Card.Text>
                {secretdetails.body}
                </Card.Text>
                <Card.Link href="#">comment</Card.Link>
            </Card.Body>
            </Card>
        </div>
    </div>
  );
}

export default secretCard;
