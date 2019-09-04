def smallest_word(words)
    words.min do |first_word, second_word|
      first_word.length <=> second_word.length
    end
  end