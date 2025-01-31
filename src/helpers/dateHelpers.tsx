import moment from "moment";

export const isBefore = (dateTimeString? :string) => {
  if (!dateTimeString) {
    return false;
  }
  
  const dateTimeToCheck = moment(dateTimeString);
  const currentDateTime = moment();

  return dateTimeToCheck.isBefore(currentDateTime);
};

export const calculateRemainingTime = (storedTestEndTimestamp: any) => {
  const now = moment().valueOf();
  const difference = storedTestEndTimestamp - now;

  return difference > 0 ? difference / 1000 : 0; // Convert milliseconds to seconds
};

export const formatCounterTime = (seconds: number) => {
  const duration = moment.duration(seconds, 'seconds');
  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  const secs = duration.seconds();
  return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${
    secs < 10 ? '0' : ''
  }${secs}`;
};
