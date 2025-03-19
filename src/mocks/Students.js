function generateId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

let students = [
    {
        id: generateId(),
        name: "Nguyễn Văn A",
        dob: "15/05/2001",
        address: "12 Lý Thường Kiệt, Hoàn Kiếm, Hà Nội",
        phone: "0987654321",
        score: 7.8,
        year: 3,
        payment: "Đã Thanh Toán",
        fee: "6.000.000",
        eligibility: "Đủ",
        studentGender: "nam"
    },
    {
        id: generateId(),
        name: "Trần Thị Bích Ngọc",
        dob: "22/08/2002",
        address: "25 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
        phone: "0903123456",
        score: 8.2,
        year: 4,
        payment: "Chưa Thanh Toán",
        fee: "7.500.000",
        eligibility: "Không",
        studentGender: "nữ"
    },
    {
        id: generateId(),
        name: "Lê Hoàng Nam",
        dob: "10/11/2000",
        address: "89 Phan Đình Phùng, Ba Đình, Hà Nội",
        phone: "0911234567",
        score: 9.0,
        year: 2,
        payment: "Đã Thanh Toán",
        fee: "5.500.000",
        eligibility: "Đủ",
        studentGender: "nam"
    },
    {
        id: generateId(),
        name: "Phạm Minh Tuấn",
        dob: "05/07/2001",
        address: "72 Lê Lợi, Hải Châu, Đà Nẵng",
        phone: "0936789123",
        score: 6.9,
        year: 1,
        payment: "Chưa Thanh Toán",
        fee: "4.200.000",
        eligibility: "Không",
        studentGender: "nam"
    },
    {
        id: generateId(),
        name: "Đỗ Thanh Hằng",
        dob: "18/03/2003",
        address: "34 Trần Phú, Nha Trang, Khánh Hòa",
        phone: "0975648392",
        score: 8.8,
        year: 3.5,
        payment: "Đã Thanh Toán",
        fee: "6.800.000",
        eligibility: "Đủ",
        studentGender: "nữ"
    }
];

export default students;
