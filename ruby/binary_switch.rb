class BinarySwitch
    def initialize(binary_string:)
      @str = binary_string
    end
  
    def question_marks
      @str.scan(/\?/).count
    end
  
    def binary_nums
      ['0', '1'].repeated(question_marks).to_a
    end
  
    def question_mark_match
      @str.enum_for(:scan, /\?/).map { Regexp.last_match.begin(0) }
    end
  
    def binary_question_mark_filler
      indices = question_mark_match
      binary_nums.each_with_object([]) do |combination, arr|
        indices.each_with_index do |str_index, idx|
          @str[str_index] = combination[idx]
        end
  
        arr << @str.clone
      end
    end
  end
