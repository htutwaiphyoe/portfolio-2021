export function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export function updateState(oldObj, newObj) {
    return {
        ...oldObj,
        ...newObj,
    };
}
