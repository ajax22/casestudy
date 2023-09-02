import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const ListWithIcons = ({ items }) => {
  return (
    <ListGroup>
      {items.map(({ label, icon, key }) => (
        <ListGroup.Item key={key}>
          <FontAwesomeIcon icon={icon} style={{ paddingRight: "5px" }} />
          {label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ListWithIcons;
