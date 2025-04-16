import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Email hoặc mật khẩu không hợp lệ");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0b1c3f" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-white text-center d-flex flex-column justify-content-center">
            <img src="https://tuyensinh.hvct.edu.vn/wp-content/uploads/2022/12/logo-slogan.png" alt="Logo" width={340} className="mb-3 mx-auto" />
            <h2>Đăng nhập vào tài khoản của bạn</h2>
          </Col>
          <Col md={6}>
            <Card className="p-4 rounded shadow-lg">
              <Card.Body>
                <h3 className="text-center">Đăng nhập</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="w-100">Đăng nhập</Button>
                  </div>
                  <p className="mt-3 text-center">Bạn chưa có tài khoản?<Link to={"/loginUp"}>Đăng ký</Link></p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;