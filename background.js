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
                title: "Mẫu Share Home 1",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm2",
                parentId: "parentFillForm",
                title: "Mẫu Share Home 2",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm3",
                parentId: "parentFillForm",
                title: "Mẫu Share Home 3",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm4",
                parentId: "parentFillForm",
                title: "Mẫu Share Home 4",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm5",
                parentId: "parentFillForm",
                title: "Mẫu Share Home 5",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm6",
                parentId: "parentFillForm",
                title: "email",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm7",
                parentId: "parentFillForm",
                title: "password",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm8",
                parentId: "parentFillForm",
                title: "long_brand",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm9",
                parentId: "parentFillForm",
                title: "short_brand",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm10",
                parentId: "parentFillForm",
                title: "firstname",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm11",
                parentId: "parentFillForm",
                title: "lastname",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm12",
                parentId: "parentFillForm",
                title: "Giới thiệu ngắn (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm13",
                parentId: "parentFillForm",
                title: "Giới thiệu dài (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm14",
                parentId: "parentFillForm",
                title: "Giới thiệu ngắn (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm15",
                parentId: "parentFillForm",
                title: "Giới thiệu dài (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm16",
                parentId: "parentFillForm",
                title: "Website (dienmaygiadungsaigon.vn)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm17",
                parentId: "parentFillForm",
                title: "Username 1 (dienmaygiadungsaigon)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm18",
                parentId: "parentFillForm",
                title: "Username 2 (thay thế: dienmaygiadungsaigonvn)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm19",
                parentId: "parentFillForm",
                title: "Username 3 (thay thế: ctysaigonfuji)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm20",
                parentId: "parentFillForm",
                title: "Sinh nhật (10/10/1990)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm21",
                parentId: "parentFillForm",
                title: "Địa chỉ (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm22",
                parentId: "parentFillForm",
                title: "Địa chỉ (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm23",
                parentId: "parentFillForm",
                title: "Số điện thoại",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm24",
                parentId: "parentFillForm",
                title: "Hashtag",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm25",
                parentId: "parentFillForm",
                title: "Mã ZIP bưu điện",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm26",
                parentId: "parentFillForm",
                title: "Link Map CID (nếu có)",
                contexts: ["editable"]
            });
            // chrome.contextMenus.create({
            //     id: "fillForm26",
            //     parentId: "parentFillForm",
            //     title: "Link Map CID (nếu có)",
            //     contexts: ["editable"]
            // });
            // chrome.contextMenus.create({
            //     id: "fillForm26",
            //     parentId: "parentFillForm",
            //     title: "Link Map CID (nếu có)",
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
            else if (info.menuItemId === "fillForm6") {
                contentToFill = formData.email;
            }
            else if (info.menuItemId === "fillForm7") {
                contentToFill = formData.password;
            }
            else if (info.menuItemId === "fillForm8") {
                contentToFill = formData.long_brand;
            }
            else if (info.menuItemId === "fillForm9") {
                contentToFill = formData.short_brand;
            }
            else if (info.menuItemId === "fillForm10") {
                contentToFill = formData.firstname;
            }
            else if (info.menuItemId === "fillForm11") {
                contentToFill = formData.lastname;
            }
            else if (info.menuItemId === "fillForm12") {
                contentToFill = formData.gioi_thieu_ngan_CO_DAU;
            }
            else if (info.menuItemId === "fillForm13") {
                contentToFill = formData.gioi_thieu_dai_CO_DAU;
            }
            else if (info.menuItemId === "fillForm14") {
                contentToFill = formData.gioi_thieu_ngan_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm15") {
                contentToFill = formData.gioi_thieu_dai_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm16") {
                contentToFill = formData.website;
            }
            else if (info.menuItemId === "fillForm17") {
                contentToFill = formData.username1;
            }
            else if (info.menuItemId === "fillForm18") {
                contentToFill = formData.username2;
            }
            else if (info.menuItemId === "fillForm19") {
                contentToFill = formData.username3;
            }
            else if (info.menuItemId === "fillForm20") {
                contentToFill = formData.birthday;
            }
            else if (info.menuItemId === "fillForm21") {
                contentToFill = formData.address_CO_DAU;
            }
            else if (info.menuItemId === "fillForm22") {
                contentToFill = formData.address_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm23") {
                contentToFill = formData.phone;
            }
            else if (info.menuItemId === "fillForm24") {
                contentToFill = formData.hashtag;
            }
            else if (info.menuItemId === "fillForm25") {
                contentToFill = formData.zip_code_postal_code;
            }
            else if (info.menuItemId === "fillForm26") {
                contentToFill = formData.GoogleMap_link_CID;
            }
            // else if (info.menuItemId === "fillForm6") {
            //     contentToFill = formData.content6;
            // }
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
