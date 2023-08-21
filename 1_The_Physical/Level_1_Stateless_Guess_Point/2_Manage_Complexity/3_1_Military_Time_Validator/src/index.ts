export class MilitaryTimeRangeValidator {
  validateHour(str: string) {
    const hour = Number(str);

    if (Number.isNaN(hour)) {
      return false;
    }

    if (hour > 23) {
      return false;
    }

    return true;
  }

  validateMinute(str: string) {
    const minute = Number(str);

    if (Number.isNaN(minute)) {
      return false;
    }

    if (minute > 59) {
      return false;
    }

    return true;
  }

  validateTime(str: string) {
    const [ hour, minute ] = str.split(':');

    return this.validateHour(hour) && this.validateMinute(minute);
  }

  validateSequential(str: string) {
    const [ start, end ] = str.split(' - ');
    const [ startHour ] = str.split(':');
    const [ endHour ] = str.split(':');

    return startHour < endHour;
  }

  validateRange(str: string) {
    const [ start, end ] = str.split(' - ');

    return this.validateTime(start) && this.validateTime(end) && this.validateSequential();
  }
}
