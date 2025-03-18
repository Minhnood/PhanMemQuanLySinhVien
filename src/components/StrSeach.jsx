import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actPayment, actYear, searchStudent } from "../store/reducer";

function StrSeach() {
    const dispatch = useDispatch();
    const [strSeach, setStrSeach] = useState(""); // Đảm bảo không bị null
    const [yearTyper, setYearTyper] = useState(""); // Dùng chuỗi rỗng thay vì 0
    const [paymentTyper, setPaymentTyper] = useState([]); // Mảng để chứa nhiều giá trị thanh toán

    function handleSeacrh(event) {
        setStrSeach(event.target.value);
    }

    function handleSumitGo() {
        dispatch(searchStudent(strSeach));
    }

    function handleClearSearch() {
        setStrSeach("");
        dispatch(searchStudent(""));
    }

    function changeYear(e) {
        setYearTyper(e.target.value || ""); // Đảm bảo không bị null
    }

    function changePayment(e) {
        const value = e.target.value;
        setPaymentTyper(prev => 
            e.target.checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    }

    useEffect(() => {
        dispatch(actYear(yearTyper));
        dispatch(actPayment(paymentTyper));
    }, [yearTyper, paymentTyper, dispatch]);

    return (
        <Col md={5}>
            <Card className="p-4 shadow">
                <Form>
                    {/* Ô tìm kiếm */}
                    <Form.Label><b>Mục tìm kiếm</b></Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                onChange={handleSeacrh}
                                type="text"
                                placeholder="Tìm kiếm tên..."
                                value={strSeach}
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

                    {/* Bộ lọc */}
                    <Form.Label><b>Mục lọc</b></Form.Label>
                    <Row>
                        <Col>
                            <Form.Control 
                                onChange={changeYear} 
                                type="text" 
                                placeholder="Số năm học..." 
                                className="mb-2"
                                value={yearTyper}
                            />
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
                            <Form.Check 
                                onChange={changePayment} 
                                type="checkbox" 
                                value="Đã Thanh Toán" 
                                label="Đã thanh toán" 
                            />
                            <Form.Check 
                                onChange={changePayment} 
                                type="checkbox" 
                                value="Chưa Thanh Toán" 
                                label="Chưa thanh toán" 
                            />
                        </Col>
                        <Col>
                            <Form.Check type="checkbox" value="Đủ" label="Đủ điều kiện thi" />
                            <Form.Check type="checkbox" value="Không" label="Chưa đủ điều kiện thi" />
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
