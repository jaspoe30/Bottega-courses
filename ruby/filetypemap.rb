class Array
    def file_type_mapper
        each_with_object(Hash.new { |h, k| h[k] = [] }) do |file, hash|
            file_ext = File.extname(file)[1..-1]
            hash[file_ext] = hash[file_ext].push(file.chomp!('.' + file_ext))
        end
    end
end