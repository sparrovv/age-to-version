(function($){
  $.fn.ageToVersion = function(args) {
    var birthDateElement = $(this);
    var settings = args || {};

    var birthDay = new Date( Date.parse(birthDateElement.text()));

    var currentDate = settings.currentDate || new Date();

    function daysInMonth(Y, M) {
      var d = new Date(Y, M, 1, 12);
      d.setDate(0);
      return d.getDate();
    }

    function dateDiff(date1, date2) {
      var y1 = date1.getFullYear(), m1 = date1.getMonth(), d1 = date1.getDate(),
      y2 = date2.getFullYear(), m2 = date2.getMonth(), d2 = date2.getDate();

      if (d1 < d2) {
        m1--;
        d1 += daysInMonth(y2, m2);
      }
      if (m1 < m2) {
        y1--;
        m1 += 12;
      }
      return {years: y1 - y2, months: m1 - m2, days: d1 - d2};
    }

    var diff = dateDiff(currentDate, birthDay);
    var version = [ diff.years, ".", diff.months, ".", diff.days ].join("");

    $(this).html(version);
  };
})(jQuery);
