export const addSpaces = (props) => {
    return props.toString().replace(/\s/g, "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
};
