import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import '../styles/profile.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';




const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();



  // Define a function to retrieve user account information

  return (
    <>
      <div>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Welcome <strong>{userInfo?.firstName}!</strong>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              ...
              Welcome <strong>{userInfo?.firstName}!</strong> You can view this page because you're logged in
            </Card.Text>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Deposit Funds" aria-label="First name" />
              </div>
              <Button className="btn btn-primary" type="submit" onClick={handleDeposit}>
                Deposit
              </Button>
            </div>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="Withdraw Funds" aria-label="Last name" />
              </div>
              <Button className="btn btn-primary" type="submit" onClick={handleWithdraw}>
                Withdraw
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProfileScreen;
