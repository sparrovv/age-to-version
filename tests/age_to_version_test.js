$(document).ready( function () {

  test("should caluclate proper date", function() {
    var el = $("<span id='foo'></span>").text("1985-07-26");
    $(el).ageToVersion({currentDate: new Date(2011,10,20)});
    equal( $(el).text(), "26.3.24", "We expect value to be ...." );
  });

  test("should caluclate proper date", function() {
    var el = $("<span id='foo'></span>").text("2011-11-18");
    $(el).ageToVersion({currentDate: new Date(2011,10,20)});
    equal( $(el).text(), "0.0.2", "We expect value to be ...." );
  });

  test("should caluclate proper date", function() {
    var el = $("<span id='foo'></span>").text("2010-11-21");
    $(el).ageToVersion({currentDate: new Date(2011,10,20)});
    equal( $(el).text(), "0.11.30", "We expect value to be ...." );
  });

});
