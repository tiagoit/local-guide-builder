(function($) {
  "use strict"
  // Check filters on load
  location.pathname.split('/').forEach(filter => {
    $.each($('.filter-checkbox'), (key, checkbox) => {
      if(filter && checkbox.value === filter) checkbox.checked = true;
    })
  });

  $('span.region-item').click((ev) => {
    console.log('click');
    console.log($(ev.target).closest('li').children('ul.cities-filter').toggle());
    console.log($(ev.target).closest('span.region-item').children('i.fa-chevron-down').toggle());
    $(ev.target).closest('span.region-item').children('i.fa-chevron-up').toggle()
  });

  // Check filter on list item click
  $('ul.cities-filter li, ul.tags-filter li').click((ev) => {
    if($(ev.target).prop('tagName') === 'INPUT') return;
    let checkbox = $(ev.target).closest('input')[0] || $(ev.target).siblings('input')[0] || $(ev.target).children('input')[0];
    checkbox.checked = !checkbox.checked;
  });

  // Update query with active filters
  $('.update-filters').click(() => {
    let filters = [];
    $.each($('.filter-checkbox'), (key, value) => {
      if(value.checked && !filters.includes(value.value)) filters.push(value.value);
    }).add(() => {
      window.location.href = '/eventos/' + filters.join('/');
    });
  });


})(jQuery);
