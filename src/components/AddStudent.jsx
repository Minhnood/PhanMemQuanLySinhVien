import { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveFrom } from "../store/reducer";

const defaultStudent = {
    id: null,
    name: "",
    dob: "",
    address: "",
    phone: "",
    score: null,
    year: null,
    payment: "Chưa Thanh Toán",
    fee: "",
    eligibility: "Không",
};

function AddStudent() {
    const dispatch = useDispatch();
    const [NewStudent, setNewStudent] = useState(defaultStudent);

    function handleChange(event) {
        const { name, type, value, checked } = event.target;

        setNewStudent((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (checked ? value : defaultStudent[name]) : value,
        }));
    }

    function handleSmuit() {
        dispatch(saveFrom(NewStudent));
    }

    function handleClearForm() {
        setNewStudent(defaultStudent);
    }

    return (
        <Col md={5}>
            <Card className="p-4 shadow">
                <Form>
                    <Form.Label><b>Mục thêm học sinh</b></Form.Label>
                    <Form.Control onChange={handleChange} type="text" name="name" placeholder="Nhập Họ và Tên..." value={NewStudent.name} className="mb-2" />
                    <Row>
                        <Col>
                            <Form.Control onChange={handleChange} name="dob" type="date" value={NewStudent.dob} className="mb-2" />
                        </Col>
                        <Col>
                            <Form.Control onChange={handleChange} name="phone" type="text" placeholder="Nhập số điện thoại..." value={NewStudent.phone} className="mb-2" />
                        </Col>
                    </Row>
                    <Form.Control onChange={handleChange} type="text" name="address" placeholder="Nhập địa chỉ..." value={NewStudent.address} className="mb-2" />
                    <Row>
                        <Col>
                            <Form.Control onChange={handleChange} type="number" name="score" placeholder="Nhập điểm" value={NewStudent.score} className="mb-2" />
                        </Col>
                        <Col>
                            <Form.Control onChange={handleChange} type="number" name="fee" placeholder="Nhập số tiền cần thanh toán..." value={NewStudent.fee} className="mb-2" />
                        </Col>
                        <Col>
                            <Form.Control onChange={handleChange} type="number" name="year" placeholder="Nhập số năm học...." value={NewStudent.year} className="mb-2" />
                        </Col>
                    </Row>
                    {/* Checkbox - Chỉ cho phép chọn một giá trị */}
                    <Row>
                        <Col>
                            <Form.Check
                                onChange={handleChange}
                                name="payment"
                                type="radio"
                                value="Đã Thanh Toán"
                                label="Đã thanh toán"
                                checked={NewStudent.payment === "Đã Thanh Toán"}
                            />
                            <Form.Check
                                onChange={handleChange}
                                name="payment"
                                type="radio"
                                value="Chưa Thanh Toán"
                                label="Chưa thanh toán"
                                checked={NewStudent.payment === "Chưa Thanh Toán"}
                            />
                        </Col>
                        <Col>
                            <Form.Check
                                onChange={handleChange}
                                name="eligibility"
                                type="radio"
                                value="Đủ"
                                label="Đủ điều kiện thi"
                                checked={NewStudent.eligibility === "Đủ"}
                            />
                            <Form.Check
                                onChange={handleChange}
                                name="eligibility"
                                type="radio"
                                value="Không"
                                label="Chưa đủ điều kiện thi"
                                checked={NewStudent.eligibility === "Không"}
                            />
                        </Col>
                    </Row>
                    {/* Button */}
                    <Row className="mt-3">
                        <Col>
                            <Button onClick={handleSmuit} variant="primary" className="w-100">Thêm</Button>
                        </Col>
                        <Col>
                            <Button onClick={handleClearForm} variant="danger" className="w-100">Xóa</Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </Col>
    );
}

export default AddStudent;
