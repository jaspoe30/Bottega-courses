def hashed_fizz_buzz num               # => 
    hash = Hash.new                    # => 
                                         # =>
    1.upto(num).each do |e|            # => 
      if (e % 5 == 0) && (e % 3 == 0)  # => 
        hash[e] = "FizzBuzz"           # => 
      elsif e % 5 == 0                 # => 
        hash[e] = "Buzz"               # => 
      elsif e % 3 == 0                 # => 
        hash[e] = "Fizz"               # => 
      else                             # => 
        hash[e] = e                    # => 
      end                              # => 
    end                                # => 
                                         # =>
    hash                               # => 
  end                                  # => :hashed_fizz_buzz