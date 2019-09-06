def daily_special hash
    menu_items = []
    hash.map { |category| menu_items << category.last }.flatten.sample
  end