export const renderYear = (date) => {
    const renderedDate = new Date(date);
    let renderedYear = renderedDate.getFullYear();
    return renderedYear;
};