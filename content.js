let lastFocusedElement = null;

// Lắng nghe sự kiện focus vào input hoặc textarea
document.addEventListener('focusin', (event) => {
    if (event.target.tagName === "input" || event.target.tagName === "textarea" || event.target.tagName === "div" || event.target.tagName === "p") {
        lastFocusedElement = event.target;
    }
});

// Nhận thông điệp từ popup để điền dữ liệu vào trường đã focus trước đó
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "autofill" && lastFocusedElement) {
        lastFocusedElement.value = request.formData.defaultText || "";
        sendResponse({ status: "done" });
    }
});
