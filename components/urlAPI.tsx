export function urlAPI(country="ar"){
  const url1 = 'https://newsapi.org/v2/top-headlines?' +
                `country=${country}` +
                '&apiKey=075aa23923e8489f8148f97a307ce0c7';

  const url2 = "https://newsapi.org/v2/top-headlines?"+
                "sources=bbc-news"+
                "&apiKey=075aa23923e8489f8148f97a307ce0c7"
  return url1;
  
}
