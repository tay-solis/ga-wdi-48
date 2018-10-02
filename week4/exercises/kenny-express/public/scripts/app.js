console.log('connected');
$.ajax({
  method: 'POST',
  url: "http://localhost:3000/api/restaurants",
  data: $("#restaurantForm").serialize()
});
