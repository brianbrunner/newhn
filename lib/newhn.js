var numItems = 5;
var spacer = '<tr class="spacer" style="height:5px"></tr>';

$.get("https://news.ycombinator.com/newest", function(newest) {
  var tmp = $('<div></div>');
  tmp.html(newest);
  var newItems = tmp.find('.itemlist tr').slice(0, numItems*3);
  newItems.find('.rank').each(function(item, elem) {
    $(elem).text('*');
  });
  var tbody = $('.itemlist tbody');
  tbody.prepend(spacer);
  tbody.prepend('<tr style="margin-bottom: 5px;"><td></td><td colspan=2>Top</td></tr>');
  tbody.prepend(newItems);
  tbody.prepend(spacer);
  tbody.prepend('<tr style="margin-bottom: 5px;"><td></td><td colspan=2>New</td></tr>');
});
