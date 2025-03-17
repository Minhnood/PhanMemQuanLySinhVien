import { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchStudent } from "../store/reducer";

function StrSeach() {
    const dispatch = useDispatch();
    const [strSeach, setStrSeach] = useState("");

    function handleSeacrh(event) {
        setStrSeach(event.target.value);
    }

    function handleSumitGo() {
        dispatch(searchStudent(strSeach));
    }

    function handleClearSearch() {
        setStrSeach("");
        dispatch(searchStudent("")); // Xóa tìm kiếm, hiển thị lại danh sách đầy đủ
    }

    return (
        <Col md={5}>
            <Card className="p-4 shadow">
                <Form>
                    <Form.Label><b>Mục tìm kiếm</b></Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                onChange={handleSeacrh}
                                type="text"
                                placeholder="Tìm kiếm tên..."
                                value={strSeach} // Cập nhật giá trị input
                                className="mb-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button onClick={handleSumitGo} variant="primary">Tìm kiếm</Button>
                        </Col>
                        <Col xs="auto">
                            <Button onClick={handleClearSearch} variant="danger">Xóa</Button>
                        </Col>
                    </Row>

                    <Form.Label><b>Mục lọc</b></Form.Label>
                    <Row>
                        <Col>
                            <Form.Control type="text" placeholder="Số năm học..." className="mb-2" />
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="Năm sinh..." className="mb-2" />
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Col><Form.Control type="number" placeholder="Điểm" className="mb-2" /></Col>
                        <Col xs="auto" className="align-self-center">-</Col>
                        <Col><Form.Control type="number" placeholder="Điểm" className="mb-2" /></Col>
                    </Row>
                    {/* Checkbox */}
                    <Row>
                        <Col>
                            <Form.Check type="checkbox" label="Đã thanh toán" />
                            <Form.Check type="checkbox" label="Chưa thanh toán" />
                        </Col>
                        <Col>
                            <Form.Check type="checkbox" label="Đủ điều kiện thi" />
                            <Form.Check type="checkbox" label="Chưa đủ điều kiện thi" />
                        </Col>
                    </Row>

                    {/* Button */}
                    <Button variant="primary" className="w-100 mt-3">Lọc</Button>
                </Form>
            </Card>
        </Col>
    );
}

export default StrSeach;
