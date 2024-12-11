export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "America/Lima",
  }

  return new Intl.DateTimeFormat("es-PE", options).format(date)
}

export const formatWeekday = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    timeZone: "America/Lima",
  }

  return new Intl.DateTimeFormat("es-PE", options).format(date)
}

export const formatTime = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "America/Lima",
  }

  return new Intl.DateTimeFormat("es-PE", options).format(date)
}
