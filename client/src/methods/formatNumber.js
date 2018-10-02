function formatNumber(num)
{
    return ('' + parseFloat(num.toFixed(2)))
        .replace('.', ',')
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, ($1) => $1 + '.');
}

export default formatNumber;