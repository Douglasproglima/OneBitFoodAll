json.id product_category.id
json.title product_category.title

json.products product_category.products do |product|
  json.partial! '/api/v1/products/product', product: product
end