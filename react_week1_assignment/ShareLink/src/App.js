import React from 'react';
import List from './components/List';
import Profile from './components/Profile';
import AddLinkForm from './components/AddLinkForm';
import SearchLink from './components/SearchLink';

import faker from 'faker'
import { Container, Row, Col, ListGroup } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: JSON.parse(localStorage.getItem('links')),
      isActive: false,
     
    }
  }
  handleToggle = () => {
    this.setState({
      isActive: !this.state.isActive
    })

  }

  handleNewLink=(link)=>{
    const newLink = link
    const newList = [...this.state.list].concat(newLink)
    console.log(newList)
    this.setState({
      list:newList
    })
    localStorage.setItem('links',JSON.stringify(newList))
    console.log(this.state)
  }

  render() {
    const name=faker.name.findName()
    const image=faker.image.avatar()
    let list = JSON.parse(localStorage.getItem('links'))
    let newList = this.state.list
    return (
      <Container fluid={true}>
        <Row>
          <Col className='text-center' xs='12'>
            <h2>LinkSharing</h2>
          </Col>
        </Row>
        <Row>
          <Col xs='3'>
            <Profile active={this.state.isActive} clickToggle={this.handleToggle} name={name} image={image} date={new Date().toLocaleString} />
          </Col>
          <Col xs='9'>
            <Row>
              <SearchLink />
            </Row>
            <Row>
              <Col xs='11'>
                <AddLinkForm addNewLink={this.handleNewLink} active={this.state.isActive} />
                <h2>Links For #REACT</h2>
                <ListGroup>
                  {newList.map((item, index) => <List key={index} title={item.title} url={item.url} tags={item.tags} />)}
                </ListGroup>
              </Col>

            </Row>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
