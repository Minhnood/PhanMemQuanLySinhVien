import { useNavigate, useLocation, Link } from "react-router-dom";
import { Dropdown, Image, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

function NavHead() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login");
    };

    if (location.pathname === "/login" || location.pathname === "/loginUp") {
        return null;
    }

    return (
        <Navbar bg="primary" variant="dark" className="p-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
                <Image src="https://tuyensinh.hvct.edu.vn/wp-content/uploads/2022/12/logo-slogan.png" alt="Logo" height={50} className="me-3" />
            </div>
            <div className="flex-grow-1 text-center">
                <h2 className="text-white m-0">QUẢN LÝ SINH VIÊN</h2>
            </div>
            <Dropdown align="end">
                <Dropdown.Toggle as="div" style={{ cursor: "pointer", padding: "10px" }}>
                    <FaUserCircle size={40} color="white" />
                </Dropdown.Toggle>

                <Dropdown.Menu className="shadow">
                    <Dropdown.Item onClick={() => navigate("/")}>
                        📋 Danh sách học sinh
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/changepass")}>
                        🔒 Đổi mật khẩu
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                        localStorage.removeItem("isAuthenticated");
                        navigate("/login");
                    }} className="text-danger">
                        🚪 Đăng xuất
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    );
}

export default NavHead;
