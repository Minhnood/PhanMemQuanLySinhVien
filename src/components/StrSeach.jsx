import { useEffect, useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actEligibility, actPayment, actScore, actYear, actBirthYear, searchStudent } from "../store/reducer";

function StrSearch() {
    const dispatch = useDispatch();
    const [strSearch, setStrSearch] = useState(""); 
    const [yearType, setYearType] = useState(""); 
    const [birthYear, setBirthYear] = useState("");
    const [paymentType, setPaymentType] = useState([]); 
    const [eligibilityType, setEligibilityType] = useState([]);
    const [score, setScore] = useState({ min: 0, max: 0 });

    function handleSearch(event) {
        setStrSearch(event.target.value);
    }

    function handleSubmitGo() {
        dispatch(searchStudent(strSearch));
    }

    function handleClearSearch() {
        setStrSearch("");
        dispatch(searchStudent(""));
    }

    function changeYear(e) {
        setYearType(e.target.value || ""); 
    }

    function changeBirthYear(e) {
        setBirthYear(e.target.value || "");
    }

    function changePayment(e) {
        const value = e.target.value;
        setPaymentType(prev => 
            e.target.checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    }

    function changeEligibility(e) {
        const value = e.target.value;
        setEligibilityType(prev => 
            e.target.checked ? [...prev, value] : prev.filter(item => item !== value)
        );
    }
    
    function changeScore(event) {
        const { name, value } = event.target;
        setScore((prev) => ({
            ...prev,
            [name]: value === "" ? "" : parseInt(value, 10),
        }));
    }

    function handlereset() {
        setStrSearch("");
        setYearType("");
        setBirthYear("");
        setPaymentType([]);
        setEligibilityType([]);
        setScore({ min: 0, max: 0 });
    }

    useEffect(() => {
        dispatch(actYear(yearType));
        dispatch(actBirthYear(birthYear));
        dispatch(actPayment(paymentType));
        dispatch(actScore(score));
        dispatch(actEligibility(eligibilityType));
    }, [yearType, birthYear, paymentType, score, eligibilityType, dispatch]);

    return (
        <Col md={5}>
            <Card className="p-4 shadow">
                <Form>
                    {/* Ô tìm kiếm */}
                    <Form.Label><b>Mục tìm kiếm</b></Form.Label>
                    <Row>
                        <Col>
                            <Form.Control
                                onChange={handleSearch}
                                type="text"
                                placeholder="Tìm kiếm tên..."
                                value={strSearch}
                                className="mb-2"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button onClick={handleSubmitGo} variant="primary">Tìm kiếm</Button>
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
                                value={yearType}
                            />
                        </Col>
                        <Col>
                            <Form.Control 
                                onChange={changeBirthYear}
                                type="number" 
                                placeholder="Năm sinh..." 
                                className="mb-2"
                                value={birthYear} 
                            />
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <Form.Control 
                                onChange={changeScore}  
                                type="number" 
                                name="min" 
                                placeholder="Điểm min" 
                                className="mb-2" 
                                value={score.min || ""}
                            />
                        </Col>
                        <Col xs="auto" className="align-self-center">-</Col>
                        <Col>
                            <Form.Control 
                                onChange={changeScore} 
                                type="number" 
                                name="max" 
                                placeholder="Điểm max" 
                                className="mb-2" 
                                value={score.max || ""}
                            />
                        </Col>
                    </Row>

                    {/* Checkbox */}
                    <Row>
                        <Col>
                            <Form.Check 
                                onChange={changePayment} 
                                type="checkbox" 
                                value="Đã Thanh Toán" 
                                label="Đã thanh toán" 
                                checked={paymentType.includes("Đã Thanh Toán")}
                            />
                            <Form.Check 
                                onChange={changePayment} 
                                type="checkbox" 
                                value="Chưa Thanh Toán" 
                                label="Chưa thanh toán" 
                                checked={paymentType.includes("Chưa Thanh Toán")}
                            />
                        </Col>
                        <Col>
                            <Form.Check 
                                onChange={changeEligibility} 
                                type="checkbox" 
                                value="Đủ" 
                                label="Đủ điều kiện thi" 
                                checked={eligibilityType.includes("Đủ")}
                            />
                            <Form.Check 
                                onChange={changeEligibility} 
                                type="checkbox" 
                                value="Không" 
                                label="Chưa đủ điều kiện thi" 
                                checked={eligibilityType.includes("Không")}
                            />
                        </Col>
                    </Row>

                    {/* Button */}
                    <Button onClick={handlereset} variant="primary" className="w-100 mt-3">Reset</Button>
                </Form>
            </Card>
        </Col>
    );
}

export default StrSearch;
