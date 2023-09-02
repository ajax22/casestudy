import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useApiData } from "../context/ApiContext";
import Loading from "./shared/molecules/loading";
import Profile from "./profile/Profile";
import AddProfileCard from "./profile/AddCard";

function Users() {
  const { data, isLoading, updateDataForId, deleteDataForId } = useApiData();

  return (
    <Loading loading={isLoading}>
      <Container className='p-3'>
        <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4 g-3'>
          {data.map((user) => (
            <Profile
              user={user}
              key={user.id}
              updateDataForId={updateDataForId}
              deleteDataForId={deleteDataForId}
            />
          ))}
          <AddProfileCard id={data.size + 1} />
        </Row>
      </Container>
    </Loading>
  );
}

export default Users;
