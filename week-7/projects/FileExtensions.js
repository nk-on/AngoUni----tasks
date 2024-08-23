function fileExtensions() {
  let fileName = prompt('Enter filename');
  const fileExtensions = new Map([
    [".gif,","image/gif"],
    [".jpg","image/jpg"],
    [".jpeg","image/jpeg"],
    [".png","image/png"],
    [".pdf","application/pdf"],
    [".txt","application/txt"],
    [".zip","application/zip"],
  ]);
  fileName = fileName.toLowerCase();
  for(let [key,value] of fileExtensions){
    if(fileName.includes(key)){
      return value;
    };
  };
};