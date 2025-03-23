import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function LoginUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
      setError("Email already exists!");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setSuccess("Đăng ký thành công! Đang chuyển hướng đến đăng nhập...");
    setTimeout(() => navigate("/login"), 2000);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#0b1c3f" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="text-white text-center d-flex flex-column justify-content-center">
            <img src="https://tuyensinh.hvct.edu.vn/wp-content/uploads/2022/12/logo-slogan.png" alt="Logo" width={340} className="mb-3 mx-auto" />
            <h2>Đăng ký tài khoản cho bạn</h2>
          </Col>
          <Col md={6}>
            <Card className="p-4 rounded shadow-lg">
              <Card.Body>
                <h3 className="text-center">Đăng ký</h3>
                {error && <p className="text-danger text-center">{error}</p>}
                {success && <p className="text-success text-center">{success}</p>}
                <Form onSubmit={handleSignUp}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="w-100">Đăng ký</Button>
                  </div>
                  <p className="text-center mt-3">
                    Bạn đã có tài khoản? <Link to={"/login"}>Đăng nhập</Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginUpPage;