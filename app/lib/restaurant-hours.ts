export const openingHours = [
  { day: "Lunedì", hours: "Chiuso" },
  { day: "Martedì", hours: "18:30 – 23:30" },
  { day: "Mercoledì", hours: "18:30 – 23:30" },
  { day: "Giovedì", hours: "18:30 – 23:30" },
  { day: "Venerdì", hours: "18:30 – 23:30" },
  { day: "Sabato", hours: "18:30 – 23:30" },
  { day: "Domenica", hours: "18:30 – 23:30" },
];

export const dinnerSlots = [
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

export function isClosedDay(date: Date) {
  return date.getDay() === 1;
}

export function getAvailableSlots(date: Date) {
  return isClosedDay(date) ? [] : dinnerSlots;
}

export function parseReservationDate(value: unknown): Date | null {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
    ? date
    : null;
}

export function getRestaurantStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((item) => item.type === type)?.value;
  const weekday = part("weekday");
  const minutes = Number(part("hour")) * 60 + Number(part("minute"));
  const isMonday = weekday === "Mon";
  const isOpen = !isMonday && minutes >= 18 * 60 + 30 && minutes < 23 * 60 + 30;

  let nextOpen = "domani alle 18:30";
  if (!isMonday && minutes < 18 * 60 + 30) {
    nextOpen = "alle 18:30";
  } else if (weekday === "Sun" && minutes >= 23 * 60 + 30) {
    nextOpen = "martedì alle 18:30";
  }

  return {
    label: isOpen ? "Siamo aperti" : `Chiusi • Riapriamo ${nextOpen}`,
    isOpen,
  };
}
