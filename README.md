<h1>Tài liệu liên quan - AutoFill Extension</h1>
<h2>GIỚI THIỆU</h2>

<h6>Phiên bản: 1.0 - Chỉ dành cho trình duyệt Chromium</h6>
<p>Một hệ thống nhằm lưu trữ nhiều nội dung thư điện tử theo danh sách và cho phép gửi đi đồng loạt </p>

- Chromium Browser là gì? - https://en.wikipedia.org/wiki/Chromium_(web_browser)#Browsers_based_on_Chromium (Browsers based on Chromium) <br>

<!-- <img src="./Readme/manhinh/GioiThieu.png"> -->

- Extension là gì? - https://vi.wikipedia.org/wiki/Ti%E1%BB%87n_%C3%ADch_m%E1%BB%9F_r%E1%BB%99ng_tr%C3%ACnh_duy%E1%BB%87t (Tiện ích mở rộng trình duyệt) <br><br>

<h2>CÁC TÍNH NĂNG</h2>
<h4>Phía Người dùng:</h4>
- Tự động điền vào các trường HTML input type="text" hoặc các trường HTML textarea

<br>

> Xem chi tiết [ở đây](##MÔ-TẢ-CHỨC-NĂNG)

## MÔ TẢ CHỨC NĂNG

> Theo dõi cách thực hiện theo trình tự từng hình ảnh phía dưới:

<h4>1. Tự động điền các thông tin được lưu sẵn với vài thao tác click chuột:</h4>

<img src="./Readme/manhinh/1.png" ><br>
<img src="./Readme/manhinh/2.png" ><br>

<h4>2. Dễ dàng thay đổi nội dung text cần tự động điền (trong file data.json):</h4>
<img src="./Readme/manhinh/3.png" ><br>

## MÔ TẢ KĨ THUẬT

- Khi click vào bất kỳ trường input hoặc textarea nào, content.js sẽ lắng nghe và lưu thông tin về trường đó.
- Sau đó, khi click chuột phải tại vị trí đó để gọi menu context -> lựa chọn các nội dung khác nhau (do cá nhân đã cấu hình) tại các sub-menu context được xổ ra.
- Và cuối cùng, khi nhấn nút "Auto Fill Option" trong popup, extension sẽ lấy dữ liệu từ file JSON và điền vào trường đã được focus trước đó.

<h2>YÊU CẦU TRƯỚC KHI CÀI ĐẶT EXTENSION</h2>

Yêu cầu duy nhất: phải sử dụng trình duyệt Chromium (danh sách trình duyệt Chromium - xem lại ở trên. Ví dụ: Google Chrome, Microsoft Edge, Brave, Opera, ...)

- Tải xuống source, sau đó giải nén và ghi nhớ vị trí thư mục chứa source

<img src="./Readme/manhinh/4.png" ><br>

- Thay đổi các nội dung cần thiết (content) trong file data.json

<img src="./Readme/manhinh/5.png" ><br>

<h2>CÁCH CÀI ĐẶT EXTENSION VÀO TRÌNH DUYỆT</h2>

- Bước 1: Vào cài đặt của trình duyệt (tùy vào từng trình duyệt khác nhau thì cách truy cập Settings cũng khác nhau) -> Quản lý tiện ích mở rộng (Extension) -> Tải các phần mở rộng chưa được đóng gói (Load unpacked)
  <img src="./Readme/manhinh/6.png" ><br>
  <img src="./Readme/manhinh/7.png" >

- Bước 2: Trong cửa sổ Explorer hỏi chọn thư mục: Chọn folder chứa source của Extension và Import vào
  <img src="./Readme/manhinh/7.png" >

- Bước 3: Ở tên extension: Xem chi tiết (Details) Cho phép chạy toàn quyền & chạy ở chế độ duyệt web riêng tư
  <img src="./Readme/manhinh/8.png" >

<h2>CÁCH SỬ DỤNG EXTENSION</h2>

Trỏ chuột đến các trường cho phép nhập liệu -> Nhấn chuột phải để mở menu context -> Auto Fill Options -> lựa chọn tùy ý Autofill 1 / 2 hoặc 3 hoặc nhiều hơn (do tự cấu hình)

<img src="./Readme/manhinh/1.png" ><br>
<img src="./Readme/manhinh/2.png" >
