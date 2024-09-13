chrome.runtime.onMessage.addListener(
    async (message, sender, sendResponse) =>
    {
        if (message.command == "resume")
        {
            await document.querySelector("video").play();
        }
    }
);
