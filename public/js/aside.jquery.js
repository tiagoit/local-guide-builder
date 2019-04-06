(function($) {
  "use strict"
  // Check filters on load
  location.pathname.split('/').forEach(filter => {
    $.each($('.filter-checkbox'), (key, checkbox) => {
      if(filter && checkbox.value === filter) checkbox.checked = true;
    })
  });

  // Check filter on list item click
  $('.filters-widget li').click((ev) => {
    if($(ev.target).prop('tagName') === 'INPUT') return;
    let checkbox = $(ev.target).closest('input')[0] || $(ev.target).siblings('input')[0] || $(ev.target).children('input')[0];
    checkbox.checked = !checkbox.checked;
  });

  // Update query with active filters
  $('.update-filters').click(() => {
    let filters = [];
    $.each($('.filter-checkbox'), (key, value) => {
      if(value.checked) filters.push(value.value);
    }).add(() => {
      window.location.href = '/eventos/' + filters.join('/');
    });
  });


})(jQuery);
