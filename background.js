chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "parentFillForm",
        title: "Tự động điền dữ liệu",
        contexts: ["editable"]
    });

    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((data) => {
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

        })
        .catch((error) => console.error("Error loading form data:", error));
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((formData) => {
            let contentToFill = "";

            if (info.menuItemId === "fillForm1") {
                contentToFill = formData.content1;
            } else if (info.menuItemId === "fillForm2") {
                contentToFill = formData.content2;
            } else if (info.menuItemId === "fillForm3") {
                contentToFill = formData.content3;
            }

            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autofillFocusedInput,
                args: [contentToFill]
            });
        })
        .catch((error) => console.error("Error fetching form data:", error));
});

function autofillFocusedInput(content) {
    const focusedElement = document.activeElement;
    if (focusedElement && ((focusedElement.tagName === "INPUT" || focusedElement.tagName === "TEXTAREA" || focusedElement.tagName === "DIV" || focusedElement.tagName === "P"))) {
        focusedElement.value = content || "";
    } else {
        console.log("No input or textarea is focused");
    }
}
