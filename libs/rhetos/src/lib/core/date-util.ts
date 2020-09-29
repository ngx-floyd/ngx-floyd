export class DateUtil {
  static isMsDate(ds: string): boolean {
    return new RegExp('\\/Date\\(([0-9]{10,15})(\\+[0-9]{4})?\\)\\/').test(ds ?? '');
  }

  static msToJsDate(ds: string): Date {
    if (!ds) {
      throw new Error('Invalid msDate value: ' + ds);
    }

    if (!this.isMsDate(ds)) {
      throw new Error('Value is not in a proper msDate format: ' + ds);
    }

    const dobj = ds.match(/(-?\d+)|([+-])|(\d{4})/g);

    if (!dobj) {
      throw new Error('Invalid msDate value: ' + ds);
    }

    const T = parseInt(dobj[0], 10);
    const tz = dobj[1];
    const offStr = dobj[2];
    let off: number;

    if (offStr) {
      off =
        parseInt(offStr.substring(0, 2), 10) * 3600000 + parseInt(offStr.substring(2), 10) * 60000;
      if (tz === '-') off *= -1;
    } else off = 0;
    return new Date(T + off);
  }

  static jsToMsDate(value: Date): string {
    return '/Date(' + (value.getTime() - new Date().getTimezoneOffset() * 60000) + ')/';
  }
}
