import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import { FaCommentAlt} from "react-icons/fa";


function Comment(props){
        const {postDetails}=props
        const {user}=postDetails
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            {/* <Button variant="outline-dark" onClick={handleShow}>
              <FaCommentAlt fontSize="20px"/>
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title> Replying to <h1>{user}</h1></Modal.Title>
              </Modal.Header>
              <Modal.Body className='add-comment-body'>
                   <textarea className='add-comment-text-area' placeholder='Want to comment on this Post !!!'/>  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Comment
                </Button>
              </Modal.Footer>
            </Modal> */}
            hey
          </>
        );
}

export default Comment