const Utils = {
  parseRequestURL: () => {
    const url = document.location.hash.slice(1).toLowerCase() || '/';
    const r = url.split('/');
    const request = {
      resource: null,
    };
    // eslint-disable-next-line prefer-destructuring
    request.resource = r[0];
    return request;
  },
};

export default Utils;
