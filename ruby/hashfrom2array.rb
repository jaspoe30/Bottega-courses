def title_builder headers, data
    hash = Hash.new
  
    headers.each_with_index do |header, index|
      hash[header] = data[index]
    end
  
    hash
  end