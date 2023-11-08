export async function GET(req: Request, res: Response) {
  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><a href="http://www.sitemaps.org/schemas/sitemap/0.9">qwe</a> 
    <url>
      <loc>
        <a href="http://www.myexample.com/foo.html">Test 1</a>
        <a href="http://www.myexample.com/foo.h">Test 2</a>
      </loc>
      <lastmod>2022-01-01</lastmod>
    </url>
    </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml',
      'Cache-control': 'stale-while-revalidate, s-maxage=3600',
    },
  });
}
