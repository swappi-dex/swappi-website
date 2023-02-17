export const numberWithCommas = (x: number | string) => {
    const idx = x.toString().indexOf('.');
    return idx !== -1
        ? x
              .toString()
              .slice(0, idx)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',') + x.toString().slice(idx)
        : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
