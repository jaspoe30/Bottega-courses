
def greeting(**kwargs):
    if kwargs:
        print(f"Hi {kwargs['first_name']} {kwargs['last_name']}, have a great day!")
    else:
        print(f"Hi Guest, have a great day!")


greeting(first_name = 'Jason', last_name = 'Poersch')