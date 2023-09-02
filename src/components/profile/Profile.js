import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListWithIcons from "../shared/molecules/listWithIcons";
import {
  faEnvelope,
  faGlobe,
  faPhone,
  faTrash,
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit, faHeart } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "react-bootstrap";
import "./style.css";
import React, { useCallback, useState } from "react";
import DeleteModal from "./Delete";
import EditUserModal from "./Edit";

function Profile({ user, updateDataForId, deleteDataForId }) {
  const { id, username, name, email, phone, website, favorite } = user;
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleFavClick = useCallback(() => {
    updateDataForId(id, { ...user, favorite: !favorite });
  }, [id, user, favorite, updateDataForId]);

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteModal(false);
    deleteDataForId(id);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleSaveEdit = useCallback(
    (editedUserData) => {
      updateDataForId(id, { ...editedUserData });
    },
    [id, updateDataForId]
  );

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  return (
    <Col className='col-md-3 g-3'>
      <Card key={id} bg='light'>
        <Card.Img
          variant='top'
          src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <ListWithIcons
            items={[
              { label: email, icon: faEnvelope, key: `email-${id}` },
              { label: phone, icon: faPhone, key: `phone-${id}` },
              {
                label: website || "no website",
                icon: faGlobe,
                key: `website-${id}`,
              },
            ]}
          />
        </Card.Body>
        <Card.Footer>
          <div className='d-flex justify-content-between'>
            <Button variant='link' onClick={handleFavClick}>
              <FontAwesomeIcon
                icon={favorite ? faHeartSolid : faHeart}
                color='#dc3545'
              />
            </Button>
            <Button variant='link' onClick={handleEditClick}>
              <FontAwesomeIcon icon={faEdit} color='#6c757d' />
            </Button>
            <Button variant='link' onClick={handleDeleteClick}>
              <FontAwesomeIcon icon={faTrash} color='#6c757d' />
            </Button>
          </div>
        </Card.Footer>
      </Card>
      <DeleteModal
        show={showDeleteModal}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        name={name}
      />
      <EditUserModal
        show={showEditModal}
        onHide={handleCancelEdit}
        onSave={handleSaveEdit}
        user={user}
      />
    </Col>
  );
}

export default React.memo(Profile);
