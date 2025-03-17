import { Container, Image, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function NavHead() {
    return (
        <Navbar bg="primary" variant="dark" className="p-4  d-flex align-items-center justify-content-between mb-4 ">
            <div className="d-flex align-items-center">
                <Image src="https://tuyensinh.hvct.edu.vn/wp-content/uploads/2022/12/logo-slogan.png" alt="Logo" height={50} className="me-3" />
            </div>
            <div className="flex-grow-1 text-center">
                <h2 className="text-white m-0">QUẢN LÝ SINH VIÊN</h2>
            </div>
            <div>
                <FaUserCircle size={40} color="white" />
            </div>
        </Navbar>

    )
}

export default NavHead;