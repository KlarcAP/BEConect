import CardProject  from "./CardProject";
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from "./LandingPage/Header";

export function TelaHome() {
  return (

    <>
      <Header />
      {/*<Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
            <CardProject
              nome="CRUD de Medicamentos"
              descricao="Sistema de cadastro e gerenciamento de medicamentos..." />
          </Col>
        </Row>
      </Container>*/}
    </>
  );
}
