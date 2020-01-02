const request = require("request")
const fs = require("fs")
const url = `https://repl.it`
urls = []

request.get({
  uri: url,
  headers: {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
  }
}, (err, resp, body) => {
  if (err) {
    throw err
  }
  original = body
  x = body.indexOf("href")
  a = body.slice(x)
  a = a.replace("href=", "")
  q = a.charAt(0)
  f = a.replace(q, "")
  f = f.slice(0, f.indexOf(q))
  r = `href=${q}${f}${q}`
  if (f.charAt(0) == "/" && f.charAt(1) != "/") {
    f = f.replace(f.charAt(0), url + "/")
  } else if (f.charAt(0) == "/" && f.charAt(1) == "/") {
    f = f.replace("//", "https://")
  }else if(f.charAt(0) == "#"){
      f = ""
  }
  for (x in original) {
    body = original.replace(r, "")
    original = original.replace(r, "")
    x = body.indexOf("href")
    a = body.slice(x)
    a = a.replace("href=", "")
    q = a.charAt(0)
    f = a.replace(q, "")
    f = f.slice(0, f.indexOf(q))
    r = `href=${q}${f}${q}`
    if (f.charAt(0) == "/" && f.charAt(1) != "/") {
      f = f.replace(f.charAt(0), url + "/")
    } else if (f.charAt(0) == "/" && f.charAt(1) == "/") {
      f = f.replace("//", "https://")
    }else if(f.charAt(0) == "#"){
      f = ""
    }
    if(f == ""){

    }else{
      console.log(f)
      urls.push(f)
    }
  }
  for (x in original) {
    body = original.replace(r, "")
    original = original.replace(r, "")
    x = body.indexOf("src")
    a = body.slice(x)
    a = a.replace("src=", "")
    q = a.charAt(0)
    f = a.replace(q, "")
    f = f.slice(0, f.indexOf(q))
    r = `src=${q}${f}${q}`
    if (f.charAt(0) == "/" && f.charAt(1) != "/") {
      f = f.replace(f.charAt(0), url + "/")
    } else if (f.charAt(0) == "/" && f.charAt(1) == "/") {
      f = f.replace("//", "https://")
    }else if(f.charAt(0) == "#"){
      f = ""
    }
    if(f == ""){

    }else{
      console.log(f)
      urls.push(f)
    }
  }
})