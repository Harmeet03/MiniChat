export const setPermission = (key, value, duration) => {
    const now = Date.now()
    
    const item = {
        value,
        expiry: now + duration
    };

    localStorage.setItem(key, JSON.stringify(item))
}

export const getPermission = (key) => {
    const storedItem = localStorage.getItem(key);

    if(!storedItem){
        return null
    }

    const now = Date.now()
    const item = JSON.parse(storedItem)

    if(now > item.expiry){
        localStorage.removeItem(key)
        return null
    }

    return item.value
}