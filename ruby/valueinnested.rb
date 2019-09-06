class Array
    def value_included? element
      each do |i|
        return true if i.has_value? element
      end
      false
    end
  end