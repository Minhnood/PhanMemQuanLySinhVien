import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function StudentInfo() {
  const { id } = useParams();
  const listStudent = useSelector((state) => state.list);
  const student = listStudent.find((item) => item.id === id);

  console.log(student);
  

  return (
    <Container>
      <Row className="mt-4">
        <Col md={3} className="text-center">
          <div style={{ border: "1px solid #ccc", width: "150px", height: "180px", margin: "auto" }}>
            <img src="https://via.placeholder.com/150" alt="Student" width="100%" height="100%" />
          </div>
          <p className="mt-2"><strong>Mã sinh viên: </strong> <span className="text-danger fw-bold">{id}</span></p>
        </Col>
        <Col md={9}>
          <Row>
            <Col md={6}>
              <p><strong>1. Trạng thái:</strong> <span className="text-danger fw-bold">Đang học</span></p>
              <p><strong>2. Họ và Tên:</strong> {student.name}</p>
              <p><strong>3. Ngày sinh:</strong> {student.dob}</p>
              <p><strong>4. Giới tính:</strong> {student.studentGender}</p>
            </Col>
            <Col md={6}>
              <p><strong>5. Năm học:</strong> {student.year} năm</p> 
              <p><strong>6. ĐT cá nhân:</strong> {student.phone}</p>
              <p><strong>7. Địa chỉ:</strong> {student.address}</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Payment Info */}
      <Row className="mt-4">
        <Col>
          <Table bordered>
            <tbody>
              <tr>
                <td><strong>Số tiền cần thanh toán:</strong> {student.fee}</td>
                <td><strong>Thanh toán:</strong> {student.payment}</td>
              </tr>
              <tr>
                <td><strong>Điểm:</strong> {student.score}</td>
                <td><strong>Điều kiện thi:</strong> {student.eligibility}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentInfo;
