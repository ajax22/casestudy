import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import AddUserModal from "./Add";
import { useApiData } from "../../context/ApiContext";

const AddProfileCard = ({ id }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const { updateDataForId } = useApiData();

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleSaveEdit = (newUserData) => {
    updateDataForId(id, { ...newUserData });
  };

  const handleCancelEdit = () => {
    setShowAddModal(false);
  };
  return (
    <Col className='col-md-3 g-3'>
      <Card>
        <Card.Img
          variant='top'
          src={`https://avatars.dicebear.com/v2/avataaars/psamd.svg?options[mood][]=happy`}
        />
        <Card.Body>
          <Card.Title>Add Profile</Card.Title>
          <Card.Text>
            Click the button below to add a new profile. Details are not saved
            on refresh
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='d-flex justify-content-between'>
            <Button variant='link' onClick={handleAddClick}>
              <FontAwesomeIcon icon={faAdd} color='#6c757d' />
            </Button>
          </div>
        </Card.Footer>
      </Card>

      <AddUserModal
        show={showAddModal}
        onHide={handleCancelEdit}
        onSave={handleSaveEdit}
      />
    </Col>
  );
};

export default AddProfileCard;
