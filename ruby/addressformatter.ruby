module AddressFormatter
  def self.format(address_obj)
    str_address = <<~ADDRESS
      #{address_obj[:account]}
      #{address_obj[:street_one]}
      #{address_obj[:street_two]}
      #{address_obj[:city]}, #{address_obj[:state]} #{address_obj[:postal_code]}
    ADDRESS
    str_address.gsub /^$\n/, ''
  end
end