import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const CardProject = (props: { nome: string, descricao: string}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="Dark" src="https://th.bing.com/th/id/OIP.avlg0U4o26ozRD2Ft6DT9QHaE8?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>{props.nome}</Card.Title>
        <Card.Text>
          {props.descricao}
        </Card.Text>
        <Button variant="primary">Analisar</Button>
      </Card.Body>
    </Card>
  );
}

export default CardProject;