import { formatDistanceToNow, addDays, format } from "date-fns";

export const getDaysAgo = (dateAgo) => {
  const dateJob = Date.parse(dateAgo) || 0;
  return addDays(dateJob, 7) > new Date()
    ? formatDistanceToNow(dateJob, {
        addSuffix: true,
      })
    : parseDate(dateJob);
};

export const parseDate = (date) => {
  const dateJob = Date.parse(date) || 0;
  return format(dateJob, "MM/dd/yyyy");
};
