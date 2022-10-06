 export default async function create_khatm(name) {
  const url = 'http://localhost/journey-to-jannah/quraan.php';
	console.log(url);
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    khatm: name,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myCommentResult = await response.text();

  return myCommentResult;
};