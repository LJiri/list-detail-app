/**
 * Fetch data and assign them to page data.
 * @param {string} url - Api url.
 * @param {Object} obj - 'this' = page data object.
 * @param {string} dataName - Name of data property where data will be assigned.
 * @param {boolean} arr - If true, data output will be an array.
 */
const fetchData = (url, obj, dataName, arr) => {
    return (async () => {
    try {
      let response = await fetch(url);
      let data = await response.json();

      if (arr) data = Array.from(data);

      obj[dataName] = data;

      return Promise.resolve();

    } catch (err) {
      console.log(err);
    }
  })();
}

export default fetchData;