import { Container, Row, Button, Table } from "react-bootstrap";
import AddStudent from "./AddStudent";
import StrSeach from "./StrSeach";
import { useDispatch, useSelector } from "react-redux";
import { actDelete, actEdit } from "../store/reducer";
import { Link } from "react-router-dom";

function Listpage() {
    const dispatch = useDispatch();
    const listStudent = useSelector((state) => state.list);
    const strSearch = useSelector((state) => state.strSearch);
    const filterYear = useSelector((state) => state.filteryear);
    const filterBirthYear = useSelector((state) => state.filterBirthYear);
    const filterPayment = useSelector((state) => state.filterPayment);
    const filterScore = useSelector((state) => state.filterScore);
    const filteractEligibility = useSelector((state) => state.filteractEligibility);

    let filteredStudent = [...listStudent];

    // Lọc theo các tiêu chí
    if (strSearch) {
        filteredStudent = filteredStudent.filter(item =>
            item.name.toLowerCase().includes(strSearch.toLowerCase())
        );
    }

    if (filterYear > 0) {
        filteredStudent = filteredStudent.filter(item => item.year === parseInt(filterYear));
    }

    if (filterBirthYear) {
        filteredStudent = filteredStudent.filter(item => item.dob.includes(filterBirthYear));
    }

    if (filterPayment.length > 0) {
        filteredStudent = filteredStudent.filter(item => filterPayment.includes(item.payment));
    }

    if (filteractEligibility.length > 0) {
        filteredStudent = filteredStudent.filter(item => filteractEligibility.includes(item.eligibility));
    }

    if (filterScore && filterScore.min !== 0 && filterScore.max !== 0) {
        filteredStudent = filteredStudent.filter(item => (
            item.score >= filterScore.min && item.score <= filterScore.max
        ));
    }

    function handleDelete(event) {
        const studentId = event.target.value;
        dispatch(actDelete(studentId));
    }

    function handleEdit(student) {
        dispatch(actEdit(student));
    }

    return (
        <Container fluid className="p-4">
            <Row className="justify-content-center">
                {/* Form Nhập Dữ Liệu */}
                <AddStudent />
                {/* Form Tìm Kiếm */}
                <StrSeach />
            </Row>
            <Table striped bordered hover className="mt-4 shadow-sm" style={{ borderRadius: "10px", overflow: "hidden" }}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Địa chỉ</th>
                        <th>Số điện thoại</th>
                        <th>Điểm</th>
                        <th>Năm học</th>
                        <th>Thanh toán</th>
                        <th>STCTT</th>
                        <th>ĐKT</th>
                        <th>Chỉnh sửa</th>
                        <th>Xem thêm</th>
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudent.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td><b>{student.name}</b></td>
                            <td>{student.dob}</td>
                            <td style={{ fontSize: "12px" }}>{student.address}</td>
                            <td><b>{student.phone}</b></td>
                            <td>{student.score}</td>
                            <td>{student.year} năm</td>
                            <td>{student.payment}</td>
                            <td>{student.fee}</td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <span
                                        className={`badge ${student.eligibility === "Đủ" ? "bg-success" : "bg-danger"}`}
                                        style={{ padding: "5px 10px" }}
                                    >
                                        {student.eligibility}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={() => handleEdit(student)} variant="success" size="sm" className="me-2">Edit</Button>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/student/${student.id}`}>
                                        <Button variant="primary" size="sm">Xem thêm</Button>
                                    </Link>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Button onClick={handleDelete} value={student.id} variant="danger" size="sm">Xóa</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default Listpage;
