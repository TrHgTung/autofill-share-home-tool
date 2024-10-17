chrome.runtime.onInstalled.addListener(() => {
    // Tạo context menu gốc
    chrome.contextMenus.create({
        id: "parentFillForm",
        title: "Tự động điền dữ liệu",
        contexts: ["editable"] // Chỉ hiện menu khi click chuột phải vào trường input hoặc textarea
    });

    // Đọc dữ liệu từ file JSON để tạo các mục con trong menu
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((data) => {
            // Tạo các mục con trong menu dựa trên nội dung của file JSON
            chrome.contextMenus.create({
                id: "fillForm1",
                parentId: "parentFillForm",
                title: "Mẫu 1",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm2",
                parentId: "parentFillForm",
                title: "Mẫu 2",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm3",
                parentId: "parentFillForm",
                title: "Mẫu 3",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm4",
                parentId: "parentFillForm",
                title: "Mẫu 4",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm5",
                parentId: "parentFillForm",
                title: "Mẫu 5",
                contexts: ["editable"]
            });
            // chrome.contextMenus.create({
            //     id: "fillForm6",
            //     parentId: "parentFillForm",
            //     title: "Mẫu 6",
            //     contexts: ["editable"]
            // });
        })
        .catch((error) => console.error("Error loading form data:", error));
});

// Xử lý sự kiện khi người dùng chọn các mục từ context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((formData) => {
            let contentToFill = "";

            // Kiểm tra mục nào được chọn và lấy nội dung tương ứng từ file JSON
            if (info.menuItemId === "fillForm1") {
                contentToFill = formData.content1;
            } else if (info.menuItemId === "fillForm2") {
                contentToFill = formData.content2;
            } else if (info.menuItemId === "fillForm3") {
                contentToFill = formData.content3;
            }
            else if (info.menuItemId === "fillForm4") {
                contentToFill = formData.content4;
            }
            else if (info.menuItemId === "fillForm5") {
                contentToFill = formData.content5;
            }
            // else if (info.menuItemId === "fillForm6") {
            //     contentToFill = formData.content6;
            // }

            // Điền nội dung vào trường input hoặc textarea hiện đang focus
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autofillFocusedInput,
                args: [contentToFill]
            });
        })
        .catch((error) => console.error("Error fetching form data:", error));
});

// Hàm điền nội dung vào trường input hoặc textarea
function autofillFocusedInput(content) {
    const focusedElement = document.activeElement;
    if (focusedElement && ((focusedElement.tagName === "INPUT" || focusedElement.tagName === "TEXTAREA" || focusedElement.tagName === "DIV" || focusedElement.tagName === "P"))) {
        focusedElement.value = content || "";
    } else {
        console.log("No input or textarea is focused");
    }
}
