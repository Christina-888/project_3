export function setCalendar () {
  const calendars = document.querySelectorAll(".budget__date-input");
  console.log(calendars)
    
    const setMinDate = ()=>  {
      const now = new Date();
        
      let currentMonth = now.getMonth() + 1; 
      if (currentMonth < 10) {
          currentMonth = '0' + currentMonth; 
      }
    
      let currentDate = now.getDate();
      if (currentDate < 10) {
          currentDate = '0' + currentDate; 
      }
    
      const fullCurrentDate = now.getFullYear() + "-" + currentMonth + "-" + currentDate;
      calendars.forEach(i => i.setAttribute("min", fullCurrentDate));
    };
    setMinDate();
    
}
