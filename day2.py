# greting based on time
from datetime import datetime
current_hour=datetime.now().hour
if current_hour<12:
  print("Good Morning")
elif current_hour<18:
  print("goood afternoon")
else:
  print("good evening")

print("The the is", datetime.now().strftime("%H:%M:%S"))
      
