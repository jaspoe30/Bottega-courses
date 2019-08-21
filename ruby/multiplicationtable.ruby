def multiplication_table num
  hash = Hash.new
  1.upto(num).each do |i|
    products = []
    (1..10).to_a.each do |e|
      products.push(e * i)
    end
    hash[i] = products
  end
  hash
end
