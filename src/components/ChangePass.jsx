import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function ChangePass() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Khai báo hook điều hướng

  // Lấy dữ liệu từ localStorage khi component mount
  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem("users"));
    if (usersData && usersData.length > 0) {
      setEmail(usersData[0].email);
      setPassword(usersData[0].password);
    }
  }, []);

  // Hàm xử lý cập nhật users trong localStorage và điều hướng về "/"
  const handleLogin = (e) => {
    e.preventDefault();
    const updatedUsers = [{ email, password }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("Cập nhật thành công!");
    navigate("/"); // Chuyển hướng về trang chủ
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0b1c3f" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 rounded shadow-lg">
              <Card.Body>
                <h3 className="text-center">Thay đổi mật khẩu</h3>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="w-100">Thay đổi</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChangePass;
