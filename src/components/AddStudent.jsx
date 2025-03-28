import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveFrom } from "../store/reducer";

const defaultStudent = {
    id: null,
    name: "",
    dob: "",
    address: "",
    phone: "",
    score: "",
    year: "",
    payment: "Chưa Thanh Toán",
    fee: "",
    eligibility: "Không",
    studentGender: "nam"
};

function AddStudent() {
    const dispatch = useDispatch();
    const [NewStudent, setNewStudent] = useState(defaultStudent);
    const [errors, setErrors] = useState({});
    const itemSelected = useSelector((state) => state.itemSelected);

    useEffect(() => {
        if (itemSelected !== null) {
            setNewStudent({...itemSelected})
        }
    }, [itemSelected])

    function handleChange(event) {
        const { name, type, value, checked } = event.target;

        setNewStudent((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (checked ? value : defaultStudent[name]) : value,
        }));
    }

    function handleSubmit() {
        // Kiểm tra trường bị bỏ trống
        let newErrors = {};
        if (!NewStudent.name) newErrors.name = "Vui lòng nhập họ và tên.";
        if (!NewStudent.dob) newErrors.dob = "Vui lòng nhập ngày sinh.";
        if (!NewStudent.phone) newErrors.phone = "Vui lòng nhập số điện thoại.";
        if (!NewStudent.address) newErrors.address = "Vui lòng nhập địa chỉ.";
        if (!NewStudent.score) newErrors.score = "Vui lòng nhập điểm.";
        if (!NewStudent.fee) newErrors.fee = "Vui lòng nhập số tiền cần thanh toán.";
        if (!NewStudent.year) newErrors.year = "Vui lòng nhập số năm học.";

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            dispatch(saveFrom(NewStudent));
            handleClearForm();
        }
    }

    function handleClearForm() {
        setNewStudent(defaultStudent);
        setErrors({});
    }

    return (
        <Col md={5}>
            <Card className="p-4 shadow">
                <Form>
                    <Form.Label><b>Mục thêm học sinh</b></Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        type="text" 
                        name="name" 
                        placeholder="Nhập Họ và Tên..." 
                        value={NewStudent.name} 
                        className="mb-2" 
                    />
                    {errors.name && <small className="text-danger">{errors.name}</small>}

                    <Row>
                        <Col>
                            <Form.Control 
                                onChange={handleChange} 
                                name="dob" 
                                type="date" 
                                value={NewStudent.dob} 
                                className="mb-2" 
                            />
                            {errors.dob && <small className="text-danger">{errors.dob}</small>}
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange} 
                                name="phone" 
                                type="text" 
                                placeholder="Nhập số điện thoại..." 
                                value={NewStudent.phone} 
                                className="mb-2" 
                            />
                            {errors.phone && <small className="text-danger">{errors.phone}</small>}
                        </Col>
                        <Col>
                            <Form.Select onChange={handleChange} name="studentGender" aria-label="Default select example">
                                <option value="nam">Nam</option>
                                <option value="nữ">Nữ</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Form.Control 
                        onChange={handleChange} 
                        type="text" 
                        name="address" 
                        placeholder="Nhập địa chỉ..." 
                        value={NewStudent.address} 
                        className="mb-2" 
                    />
                    {errors.address && <small className="text-danger">{errors.address}</small>}

                    <Row>
                        <Col>
                            <Form.Control 
                                onChange={handleChange} 
                                type="number" 
                                name="score" 
                                placeholder="Nhập điểm" 
                                value={NewStudent.score} 
                                className="mb-2" 
                            />
                            {errors.score && <small className="text-danger">{errors.score}</small>}
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange} 
                                type="number" 
                                name="fee" 
                                placeholder="Nhập số tiền cần thanh toán..." 
                                value={NewStudent.fee} 
                                className="mb-2" 
                            />
                            {errors.fee && <small className="text-danger">{errors.fee}</small>}
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={handleChange} 
                                type="number" 
                                name="year" 
                                placeholder="Nhập số năm học...." 
                                value={NewStudent.year} 
                                className="mb-2" 
                            />
                            {errors.year && <small className="text-danger">{errors.year}</small>}
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
                            <Button onClick={handleSubmit} variant="primary" className="w-100">Thêm</Button>
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
