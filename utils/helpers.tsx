import { parseISO, format } from "date-fns";

export function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

export const formatDate = (dateString: any) => {
    const date = parseISO(dateString);
    return format(date, "LLLL d, yyyy");
};

export function userInitials(name: string) {
    let initials = name.length ? name : "Morgan";

    return initials
        .split(" ")
        .map((n) => n[0])
        .join(" ")
        .toUpperCase();
}

export function readStringValue(string: string, value: string) {
    return string.includes(value);
}

export function limitString(
    text: string,
    count = 30,
    insertDots = false,
    insert = "..."
) {
    return (
        text.slice(0, count) + (text.length > count && insertDots ? insert : "")
    );
}

export function getItemByIdFromData(id: string | number, data: any) {
    return data.filter((item: any) => id === item.id);
}

export function inset(amount?: string[]): string {
    return `
        ${
            !amount
                ? `
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                `
                : ``
        }
        ${
            amount && amount[0] && !amount[1]
                ? `top: ${amount[0]};`
                : amount && amount[0] && amount[1] === null
                ? `top: ${amount[0]};`
                : ``
        }
        ${
            amount && amount[0] && amount[1] && !amount[2]
                ? `
                top: ${amount[0]};
                right: ${amount[1]};
                bottom: ${amount[0]};
                left: ${amount[1]};
                `
                : ``
        }
        ${
            amount && amount[0] && amount[1] && amount[2] && !amount[3]
                ? `
                top: ${amount[0]};
                right: ${amount[1]};
                bottom: ${amount[2]};
                left: ${amount[1]};
                `
                : ``
        }
        ${amount && amount[1] ? `right: ${amount[1]};` : ``}
        ${amount && amount[2] ? `bottom: ${amount[2]};` : ``}
        ${amount && amount[3] ? `left: ${amount[3]};` : ``}
    `;
}
