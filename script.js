let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

this.getDay = function() {
    return this.day;
};
this.getMonth = function() {
    return this.month;
};
this.getYear = function() {
    return this.year;
};
this.setDay = function(day) {
    this.day  = day;
};
this.setMonth = function(month) {
    this.month  = month;
};
this.setYear = function(year) {
    this.year  = year;
};
this.setDate = function (day,month,year) {
    this.day = day;
    this.month = month;
    this.year = year;
};
this.toString = function () {
    if (this.day< 10)this.day = '0' + this.day + '/';
    else this.day = this.day+ '/';
    if (this.month<10) this.month = '0' + this.month + '/';
    else this.month = this.month + '/';
    this.year = this.year + '.';
    return this.day + this.month + this.year;
}
};
let date = new MyDate(2, 2, 2007);
let day = date.getDay(); // 2

let month = date.getMonth(); // 2

let year = date.getYear(); // 2007
alert(day + "/" + month + "/" + year);
date.setDay(10);
date.setMonth(10);
date.setYear(2019);
alert(date.day + "/" + date.month + "/" + date.year);
date.setDate(8,4,2019);
alert(date.toString());