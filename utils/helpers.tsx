import { parseISO, format } from "date-fns";

export function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

const formatDate = (dateString: any) => {
    const date = parseISO(dateString);
    return format(date, "LLLL d, yyyy");
};

const userInitials = (name: string) => {
    let initials = name.length ? name : "Morgan";

    return initials
        .split(" ")
        .map((n) => n[0])
        .join(" ")
        .toUpperCase();
};

const readStringValue = (string: string, value: string) => {
    return string.includes(value);
};

const limitString = (
    text: string,
    count = 30,
    insertDots = false,
    insert = "..."
) => {
    return (
        text.slice(0, count) + (text.length > count && insertDots ? insert : "")
    );
};

function getItemByIdFromData(id: string | number, data: any) {
    return data.filter((item: any) => id === item.id);
}

export {
    formatDate,
    limitString,
    userInitials,
    readStringValue,
    getItemByIdFromData,
};
