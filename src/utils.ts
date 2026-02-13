export const parseChipItems = (value: string | null | undefined): string[] => {
    if (!value) return [];
    return String(value)
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
};
