import { Container, Row, Button, Table } from "react-bootstrap";
import AddStudent from "./AddStudent";
import StrSeach from "./StrSeach";
import { useSelector } from "react-redux";

function Listpage() {
    const listStudent = useSelector((state) => state.list);
    const strSearch = useSelector((state) => state.strSearch);
    let filterStudernt = [...listStudent];
    console.log(filterStudernt);
    
    if (strSearch) {
        filterStudernt = filterStudernt.filter(item => item.name.toLowerCase().includes(strSearch.toLowerCase()));
    }


    return (
        <Container fluid className="p-4">
            <Row className="justify-content-center">
                {/* Form Nhập Dữ Liệu */}
               <AddStudent/>
                {/* Form Tìm Kiếm */}
               <StrSeach/>
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
                        <th>Xóa</th>
                    </tr>
                </thead>
                <tbody>
                    {filterStudernt.map((student, index) => (
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
                                    <Button variant="success" size="sm" className="me-2">Edit</Button>
                                </div>
                            </td>
                            <td>
                                <div className="d-flex justify-content-center">
                                    <Button variant="danger" size="sm">Xóa</Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default Listpage;