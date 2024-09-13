async function onStateChanged(newState)
{
    if (previousState == "locked" && newState != "locked")
    {
        let youTubeTabs = await chrome.tabs.query(
            {
                url: "https://www.youtube.com/*",
            }
        );

        for (const youTubeTab of youTubeTabs)
        {
            await chrome.tabs.sendMessage(
                youTubeTab.id,
                {
                    command: "resume",
                }
            );
        }
    }

    previousState = newState;
}

let previousState = "";

chrome.idle.onStateChanged.addListener(
    onStateChanged
);
