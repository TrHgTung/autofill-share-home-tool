chrome.runtime.onInstalled.addListener(() => {
    // Tạo context menu khi extension được cài đặt
    chrome.contextMenus.create({
        id: "fillForm",
        title: "Nội dung Share Home 1",
        contexts: ["editable"] // Chỉ hiển thị menu khi click chuột phải vào trường input hoặc textarea
    });
});

// Hàm đọc file JSON từ local storage
function getFormData(callback) {
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((data) => callback(data))
        .catch((error) => console.error("Error loading form data:", error));
}

// Xử lý sự kiện khi người dùng chọn "Fill Form" từ context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "fillForm") {
        getFormData((formData) => {
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autofillFocusedInput,
                args: [formData]
            });
        });
    }
});

// Hàm sẽ điền dữ liệu vào trường đang được focus
function autofillFocusedInput(formData) {
    const focusedElement = document.activeElement;
    if (focusedElement && (focusedElement.tagName === "INPUT" || focusedElement.tagName === "TEXTAREA" || focusedElement.tagName === "DIV" || focusedElement.tagName === "P")) {
        focusedElement.value = formData.defaultText || "";
    } else {
        console.log("Không có trường dữ liệu nào được focús");
    }
}
