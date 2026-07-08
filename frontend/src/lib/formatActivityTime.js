import {
    format,
    formatDistanceToNow,
    isToday,
    isYesterday,
    differenceInDays,
} from "date-fns";

export function formatActivityTime(date) {

    const activityDate = new Date(date);

    if (isToday(activityDate)) {

        return formatDistanceToNow(activityDate, {
            addSuffix: true,
        })
            .replace("about ", "")
            .replace("minutes", "min")
            .replace("minute", "min")
            .replace("hours", "hr")
            .replace("hour", "hr");

    }

    if (isYesterday(activityDate)) {

        return `Yesterday • ${format(activityDate, "h:mm a")}`;

    }

    if (differenceInDays(new Date(), activityDate) < 7) {

        return format(activityDate, "EEEE • h:mm a");

    }

    return format(activityDate, "d MMM • h:mm a");

}