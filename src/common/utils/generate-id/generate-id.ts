import * as crypto from 'crypto';

export const generateId = (prefix: string = '', length: number = 10): Promise<string> => {
  return new Promise((resolve, reject) => {
    let id = '';
    if (prefix) id += prefix + '_';

    crypto.randomBytes(length, (err, buf) => {
      if (err) return reject(err);

      id += buf
        .toString('base64')
        .replace(/\/|\+|=/g, '') // base32 characters only (for URL encode)
        .slice(0, length);

      return resolve(id);
    });
  });
};
