import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function CardProject() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Dark" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Projeto #01</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Analisar</Button>
      </Card.Body>
    </Card>
  );
}