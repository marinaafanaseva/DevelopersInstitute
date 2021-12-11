export const BOOKS = 'BOOKS'
export const SEARCH = 'SEARCH'
export const SORT = 'SORT'

export const handelChange = (value) => {
    return {
        type: SEARCH,
        payload: value
    }

}

export const getBooks = () => async (dispatch, getState) => { //getState // value
    let sort = getState().sortBy;
    let value = getState().search
    try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}${sort}`)
        //https://www.googleapis.com/books/v1/volumes?q=filter=free-ebooks=${value}${sort}  ??? 
        //https://developers.google.com/books/docs/v1/using
        const data = await res.json()
        dispatch({
            type: BOOKS,
            payload: data
        })
    } catch (e) {
        console.log(e);
    }
}

export const getValue = (value) => {
    console.log(value);
    return {
        type: value,
    };
};
