export const removeSpaces = (props) => {
    return props
        .toString()
        .replace(/\s/g, "")
};
