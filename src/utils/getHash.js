const getHash = () =>
  // #/1/
  //slice, elimina el #
  //split, elimina los /
  // ['', '1', '']
  // [1] accedemos a '1' el id
  location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

export default getHash;
