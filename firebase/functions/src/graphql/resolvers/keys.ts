const getKeys = () => {
    const keys = [{
        key: "public_key",
        validUntil: new Date().toISOString(),
    }];
    return keys
}

export const keysResolver = () => {
    return getKeys()
}