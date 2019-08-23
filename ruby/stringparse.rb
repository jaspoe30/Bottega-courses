def string_parser str_arr
    final_array = []
    str_arr.each do |raw_string|
      final_array << raw_string.scan(/\d+/).last.to_i
    end
    final_array
  end