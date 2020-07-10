import React from 'react';
import {List} from './List';
import {Profile} from './Profile';
import {AddLinkForm} from './AddLinkForm';
import {SearchLink} from './SearchLink';

// import faker from 'faker'
import { Container, Row, Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';


const App = () => (
    <div>
      <Container fluid={true}>
        <Row>
          <Col className='text-center' xs='12'>
            <h2>LinkSharing</h2>
          </Col>
        </Row>
        <Row>
          <Col xs='3'>
            <Profile  />
          </Col>
          <Col xs='9'>
            <Row>
              <SearchLink />
            </Row>
            <Row>
              <Col xs='11'>
                <AddLinkForm   />
                <List/>
              </Col>

            </Row>
          </Col>
        </Row>

      </Container>       
    </div>
  );

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       list: JSON.parse(localStorage.getItem('links')),
//       searchList:[],
//       key:"",
//       isActive: false,

//     }
//   }
//   handleToggle = () => {
//     this.setState({
//       isActive: !this.state.isActive
//     })

//   }

//   handleNewLink=(link)=>{
//     const newLink = link
//     const newList = [...this.state.list].concat(newLink)
//     console.log(newList)
//     this.setState({
//       list:newList
//     })
//     localStorage.setItem('links',JSON.stringify(newList))
//     console.log(this.state)
//   }

//   handleClickSearch = (key) =>{
//     let oldList = [...this.state.list]
//     console.log(key)
//     let newList = oldList.filter(list=>
//        list.title.includes(key)||list.tags.includes(key)
//     )
//     this.setState({
//       key:key,
//       searchList:newList,
//     })
//   }

//   render() {

//     let newList = [...this.state.list]
//     let searchList = [...this.state.searchList]
//     return (
    //   <Container fluid={true}>
    //     <Row>
    //       <Col className='text-center' xs='12'>
    //         <h2>LinkSharing</h2>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col xs='3'>
    //         <Profile active={this.state.isActive} clickToggle={this.handleToggle} name={this.state.name} image={this.state.image} date={new Date().toLocaleString} />
    //       </Col>
    //       <Col xs='9'>
    //         <Row>
    //           <SearchLink clickSearch={this.handleClickSearch}/>
    //         </Row>
    //         <Row>
    //           <Col xs='11'>
    //             <AddLinkForm addNewLink={this.handleNewLink} active={this.state.isActive} />
    //             <h2>Links For #REACT</h2>
    //             <ListGroup>
    //               {this.state.key?searchList.map((item, index) => <List key={index} title={item.title} url={item.url} tags={item.tags}/>):
    //               newList.map((item, index) => <List key={index} title={item.title} url={item.url} tags={item.tags} />)}
    //             </ListGroup>
    //           </Col>

    //         </Row>
    //       </Col>
    //     </Row>

    //   </Container>
//     );
//   }
// }
