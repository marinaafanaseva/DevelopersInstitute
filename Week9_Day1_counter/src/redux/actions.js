export const MINUS = 'MINUS';
export const PLUS = 'PLUS';

export const addOne = () => {
  return {
    type:PLUS
  }
}

export const minusOne = () => {
  return {
    type: MINUS
  }
}
