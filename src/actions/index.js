export const removeItem = (itemType, id) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            itemType,
            id
        },
    };
};

export const addItem = (itemType, itemContent) => {
    const setId = () => `_${Math.random().toString().substr(2,9)}`;

    return {
        type: 'ADD_ITEM',
        payload: {
            itemType,
            item: {
                id: setId(),
                ...itemContent
            }
        },
    };
};