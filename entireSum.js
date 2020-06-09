<ul>
  {['abc', 'def', 'hik', 'lmnop'].reduce((acc, str) => [ 
    ,,,acc,
    <li>{str}</li>
  ], [])}
</ul>


`SELECT * FROM products INNER JOIN vendors ON products.vendor_id = vendors.id where vendors.id = ${id}` 