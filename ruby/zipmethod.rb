headers = [
    '1B',
    '2B',
    '3B',
    'SS',
    'C',
    'P',
    'LF',
    'CF',
    'RF'
  ]
  
  astros = [
    'Gurriel',
    'Altuve',
    'Bregman',
    'Correa',
    'Gattis',
    'Keuchel',
    'Beltran',
    'Springer',
    'Reddick'
  ]
  
  rangers = [
    'Fielder',
    'Andrus',
    'Odor',
    'Beltre',
    'Lucroy',
    'Darvish',
    'Gomez',
    'Choo',
    'Mazara'
  ]
  
  def position_filter(headers, *data)
    headers.zip(*data)
  end