let uniqueKeys: string[] = ["123456", "666666", "000000"]


function findKey(key: string): boolean {
    const i = uniqueKeys.indexOf(key) 
    if(i !== -1) {
        uniqueKeys.splice(i, 1)
        return true
    }
    return false
}

export {
    findKey,
    uniqueKeys
}

