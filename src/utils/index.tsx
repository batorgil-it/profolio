import dayjs from "dayjs";

export const isEmptyDate: (date?: string | null) => boolean = (date) => {
  if (!date) return true;
  return date.startsWith("0001-01-01");
};

export const waitTime = (time: number = 100) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export const getStr = (id?: number) => {
  if (!id) return "0";
  return id.toString();
};

export const isImage = (ext: string): boolean =>
  ext.search(/.(jpg|jpeg|png|gif)$/i) >= 0;

export const renderDate: (
  date?: Date | null | string,
  time?: boolean
) => string = (date, time = false) => {
  if (!date) return "-";
  return isEmptyDate(date?.toString())
    ? "-"
    : dayjs(date).format(time ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
};

export const renderTime: (date?: Date | null | string) => string = (date) => {
  if (!date) return "-";
  if (typeof date === "string" && date.length == 5) {
    return date;
  }
  return isEmptyDate(date?.toString()) ? "-" : dayjs(date).format("HH:mm");
};

export const formatAPIDate = (date?: any): string => {
  if (date) return dayjs(date).format("YYYY-MM-DDTHH:mm:ssZ");
  return "";
};

export const renderMoney: (money?: number | null) => string = (money) => {
  if (!money) return "0";
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 2,
  }).format(money);
};

export const renderFullname = (obj?: any) => {
  if (obj && "first_name" in obj && "last_name" in obj) {
    return (
      obj["last_name"]?.substr(0, 1).toUpperCase() + ". " + obj["first_name"]
    );
  }
};

export const renderNameInitial = (obj?: any) => {
  if (obj && "first_name" in obj && "last_name" in obj) {
    return (
      obj["last_name"]?.substr(0, 1).toUpperCase() +
      "" +
      obj["first_name"]?.substr(0, 1).toUpperCase()
    );
  }
};

export const renderFileUrl = (url?: string) => {
  return (process.env.NEXT_PUBLIC_STORAGE || "") + url;
};

export const renderHHMM: (val?: string | null) => string = (val) => {
  if (!val) {
    return "-";
  }

  return `${val.substr(0, 2)}:${val.substr(2, 2)}`;
};

export const extractHHMM: (val?: string | number | null) => number[] = (
  val
) => {
  if (!val) {
    return [0, 0];
  }
  if (typeof val === "string") {
    val = parseInt(val);
  }

  if (val <= 0) {
    return [0, 0];
  }

  return [Math.floor(val / 60), Math.floor(val % 60)];
};

export const renderDateDDMMYY: (date: any) => string = (date) => {
  if (!date) return "-";
  return dayjs(date, "DDMMYY").format("YYYY-MM-DD");
};

export const renderDateEnglish: (date: any) => string = (date) => {
  if (!date) return "-";
  return dayjs(date).format("DD MMM YYYY");
};

export const numberToUnit = (num: number) => {
  const units = ["+", "K", "M", "B", "T"];
  let unitIndex = 0;

  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }

  return {
    value: Number(num.toFixed(0)),
    unit: units[unitIndex],
  };
};
