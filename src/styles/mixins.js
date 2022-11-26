
export const flexAlignVerticalContent = (x, y) => `
    display: flex;
    flex-direction: column;
    align-content: ${x};
    justify-content: ${y};
`;

export const flexAlignHorizontalContent = (x, y) => `
    display: flex;
    flex-direction: row;
    align-content: ${y};
    justify-content: ${x};
`;

