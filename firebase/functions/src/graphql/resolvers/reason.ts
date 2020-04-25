
const Reason = {
    title: "Quarantine",
    type: 'REASON',
    message: "You may have been in contact with infected person.",
    published: new Date().toISOString(),
    end: new Date().toISOString(),
}


const getReason = () => {
    return Reason
}

export const reasonResolver = () => {
    return getReason()
}