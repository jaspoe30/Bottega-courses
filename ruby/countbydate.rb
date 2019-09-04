def count_by_day(arr)
    final_arr = arr.group_by { |e| e.created_at }.
      each_with_object([]) { |e, counted_array| counted_array << e.last.count }
  end